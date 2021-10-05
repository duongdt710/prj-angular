import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
// @ts-ignore
import * as $ from 'jquery';
import {DialogOverviewComponent} from "../../dialog-overview/dialog-overview.component";
import {MatDialog} from "@angular/material/dialog";
import {Location} from "@angular/common";


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
    public _location: Location
  ) {
  }

  ngOnInit(): void {
    this.runSlideShow();

  }

  runSlideShow() {

  }

  getData($event: any) {
    // console.log($event)
    if ($event.index == 3 && $event.tab.textLabel == 'ĐĂNG XUẤT') {
      this.openDialog($event.index);
      // this.route.navigate(['/login']);
    } else if ($event.index == 1 && $event.tab.textLabel == 'GIỚI THIỆU') {
      void this.route.navigate(['/introduce']);
      // void this._location.replaceState('/duongdthy');
    } else if ($event.index == 2 && $event.tab.textLabel == 'QUẢN LÝ') {
      // void this.route.navigate(['menu-food']);
      this.openDialogManager($event.index);
    }
  }

  openDialog(index: unknown): void {
    const data = {
      content: 'Bạn có chắc chắn muốn đăng xuất không?',
      title: 'Đăng xuất phần mềm'
    }
    // @ts-ignore
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '100%',
      backdrop: 'static',
      keyboard: true,
      data,
      disableClose: true
    });


    const bsModalHide = dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    }, null, () => {
      bsModalHide.unsubscribe();
    })

  }

  openDialogManager(index: unknown): void {
    const data = {
      content: 'Xin chào Đỗ Thành Dương',
      title: 'Test popup'
    }
    // @ts-ignore
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '100%',
      backdrop: 'static',
      keyboard: true,
      data,
      disableClose: true
    });

    const bsModalHide = dialogRef.afterClosed().subscribe(res => {
      console.log('the close dialog popup manager')
    }, null, () => {
      bsModalHide.unsubscribe()
    })
  }


}
