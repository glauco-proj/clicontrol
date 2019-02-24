import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {FibonacciService} from "../service/fibonacci.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {

  fibonacciForm: FormGroup;
  sequences          = [];
  submitted: boolean        = false;
  invalidFibonacci: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private fibonacciService: FibonacciService, private route: ActivatedRoute) { }

  onSubmitFibonacci() {
    this.submitted = true;
    if (this.fibonacciForm.invalid) {
      return;
    }

    this.fibonacciService.getSequence(this.fibonacciForm.controls.initial.value, this.fibonacciForm.controls.size.value)
      .subscribe(
        result => {
           if(result){
             this.sequences = result;
             this.invalidFibonacci = false;
           }
           else{
             this.invalidFibonacci = true;
           }
        },
        error => {
          this.invalidFibonacci = true;
        });
  }

  ngOnInit() {
    this.fibonacciForm = this.formBuilder.group({
      initial: ['0', Validators.required],
      size:    ['5', Validators.required]
    });
  }
}
