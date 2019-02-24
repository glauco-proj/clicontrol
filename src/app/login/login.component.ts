import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {AuthenticationService} from "../service/authentication.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean    = false;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService, private route: ActivatedRoute) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .subscribe(
        result => {
           if(result){
             this.router.navigate(['home']);
           }
           else{
             this.invalidLogin = true;
           }
        },
        error => {
          this.invalidLogin = true;
        });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
