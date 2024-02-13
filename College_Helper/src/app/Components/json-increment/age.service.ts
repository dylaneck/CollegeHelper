import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class peopleService {
  constructor(private http: HttpClient) {}

  // Method to fetch JSON data from file
  getPeopleData(): Observable<any> {
    return this.http.get('assets/people.json');
  }

  incrementAges(people: any[]): void {
    people.forEach(person => {
      person.age++;
    });
  }
}