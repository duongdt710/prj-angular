import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public http: HttpClient
  ) { }

  getDataHome() {
    // this.http.get('http://jsonplaceholder.typicode.com/users').subscribe((res) => {
    //   return console.log(res);
    // })
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
}
