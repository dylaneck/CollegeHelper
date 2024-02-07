import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/assets/Static/ApiUrl';
@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private $http: HttpClient) {}

  incrementNumber(num: Number) {
    let url = API.API_URL + '/increment/' + num;

    return this.$http.get(url);
  }
}
