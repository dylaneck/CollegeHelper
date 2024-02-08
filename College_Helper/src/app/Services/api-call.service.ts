import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/assets/Static/ApiUrl';
@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private $http: HttpClient) {}

  incrementNumber(num: Number) {
    console.log(environment);
    let url = environment.API_URL + '/increment/' + num;

    console.log(url);

    return this.$http.get(url);
  }
}
