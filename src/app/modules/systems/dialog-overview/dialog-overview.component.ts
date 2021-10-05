import {Component, OnInit, Inject} from '@angular/core';
import {global} from "@angular/compiler/src/util";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../sign-in/login/components/login/login.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent implements OnInit {
  isTime: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {content: string},
    public router: Router,
    public dialog: MatDialog,
    // public name: LoginComponent
  ) {
  }

  ngOnInit(): void {


  }

  acceptRequest() {
    this.dialog.closeAll();
    this.router.navigate(['/login']);
  }

}
