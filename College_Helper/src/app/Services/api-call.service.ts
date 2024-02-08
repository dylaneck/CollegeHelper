import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private $http: HttpClient) {}

  incrementNumber(num: Number) {
    let url = 'https://rgmd7xcbmd.execute-api.us-west-1.amazonaws.com/api/' + '/increment/' + num;

    console.log(url);

    return this.$http.get(url);
  }
}
