import {Component, OnInit, Inject} from '@angular/core';
import {global} from "@angular/compiler/src/util";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {LoginComponent} from "../sign-in/login/components/login/login.component";

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent implements OnInit {
  isTime: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {name: string},
    // public name: LoginComponent
  ) {
  }

  ngOnInit(): void {
    // if (this.data.name == "duong") {
    //   this.isTime = false;
    // }

  }

}
