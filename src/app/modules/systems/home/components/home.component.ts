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
    {image: 'https://cong-news.appwifi.com/wp-content/uploads/2021/04/web-slide-2.jpeg'},
    {image: 'https://cong-news.appwifi.com/wp-content/uploads/2020/10/Upsize-POSM-1-1.jpg'},
    {image: 'https://cong-news.appwifi.com/wp-content/uploads/2020/06/Đồ-Địa-Phương-Slide-1.jpg'}
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
    // @ts-ignore
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      backdrop: 'static',
      keyboard: true,
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    })

  }

}
