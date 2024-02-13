import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class peopleService {
  constructor(private http: HttpClient) {}

  incrementAges(people: any[]): void {
    people.forEach(person => {
      person.age++;
    });
  }
}