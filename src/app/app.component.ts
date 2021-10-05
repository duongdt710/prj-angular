import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prj-angular';
  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    // this.http.get('http://jsonplaceholder.typicode.com/users').subscribe((res) => {
    //   return console.log(res);
    // })
  }
}
