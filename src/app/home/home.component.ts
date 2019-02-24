import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: Object;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onClickLogPerson(){
    this.router.navigate(['logperson']);

  }

  onClickFibonacci(){
    this.router.navigate(['fibonacci']);
  }
}
