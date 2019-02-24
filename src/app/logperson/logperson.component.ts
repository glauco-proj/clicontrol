import { Component, OnInit } from '@angular/core';
import {PersonService} from "../service/person.service";
import { Router } from '@angular/router';
import { Person } from '../model/person';

@Component({
  selector: 'app-logperson',
  templateUrl: './logperson.component.html',
  styleUrls: ['./logperson.component.css']
})
export class LogpersonComponent implements OnInit {

  persons:Person[] = [];

  constructor(
    private router: Router,
    private personService: PersonService) { }

  ngOnInit() {
    this.personService.getAll()
      .subscribe(
        result => {
          this.persons = result;
        }
      );
  }

  onClickPersion(){
    this.router.navigate(['person']);
  }
}
