import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private $http: HttpClient) {}

  incrementNumber(num: Number) {
    let url = environment.API_URL + '/increment/' + num;
    return this.$http.get(url);
  }

  checkIfUserIsLoggedIn() {
    const user = localStorage.getItem('user');
    return user ? true : false;
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('user', username);
      return true;
    }
    return false;
  }
}
