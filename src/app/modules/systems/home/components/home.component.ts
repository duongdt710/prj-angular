import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
// @ts-ignore
import * as $ from 'jquery';
import {DialogOverviewComponent} from "../../dialog-overview/dialog-overview.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    {image: 'assets/img/img_1.jpg'},
    {image: 'assets/img/img_2.jpg'},
    {image: 'assets/img/img_3.jpg'}
  ];
  isColor: string = "white";

  constructor(
    public route: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.runSlideShow();

  }

  runSlideShow() {

  }

  getData($event: any) {
    console.log($event)
    if ($event.index == 3 && $event.tab.textLabel == 'ĐĂNG XUẤT') {
      this.openDialog();
      // this.route.navigate(['/login']);
    }
  }

  openDialog(): void {
    const data = {
      content: 'Bạn có chắc chắn muốn đăng xuất không?',
      title: 'Đăng xuất phần mềm'
    }
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    })

  }

}
