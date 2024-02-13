
import { Component, Input, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/Services/api-call.service';
import { peopleService } from './age.service';

@Component({
  selector: 'app-json-increment',
  templateUrl: './json-increment.component.html',
  styleUrls: ['./json-increment.component.scss']
})
export class JsonIncrementComponent{
  jsonData: string = '';
  parsedPeople: any;

  constructor(private peopleService: peopleService) {}

  parseJson(): void {
    try {
      this.parsedPeople = JSON.parse(this.jsonData);
      this.peopleService.incrementAges(this.parsedPeople);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }
}
