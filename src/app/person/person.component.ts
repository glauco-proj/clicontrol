import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {PersonService} from "../service/person.service";
import {AlertService} from "../service/alert.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  personForm: FormGroup;
  person: Person;
  submitted: boolean     = false;
  invalidPerson: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private personService: PersonService,
    private route: ActivatedRoute,
    private alertService: AlertService) { }

  onSubmitFibonacci() {
    this.submitted = true;
    if (this.personForm.invalid) {
      return;
    }

    this.personService.log(this.personForm.value)
      .subscribe(
        result => {
           if(result){
             this.person        = result;
             this.personForm.reset();
             this.invalidPerson = false;
           }
           else{
             this.invalidPerson = true;
           }
        },
        error => {
          this.invalidPerson = true;
        });
  }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      name:     ['', Validators.required],
      birthday: ['', Validators.required],
      sex:      ['', Validators.required]
    });
  }
}
