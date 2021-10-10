import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
// @ts-ignore
import * as $ from 'jquery';
import {DialogOverviewComponent} from "../../dialog-overview/dialog-overview.component";
import {MatDialog} from "@angular/material/dialog";
import {fromEvent, interval, observable} from "rxjs";
import {Observable} from "rxjs";
import {Observer} from "rxjs";

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

  dataArray = [
    {
      child: [{
        child: [{
          child: [{
            child: [{
              child: [{
                id: 15, parentId: 13, departmentName: "Phòng kỹ thuật", numberChild: 3, child: [
                  {id: 20, parentId: 15, departmentName: "Phòng sale"},
                  {id: 18, parentId: 15, departmentName: "Phòng BA"},
                  {id: 19, parentId: 15, departmentName: "Phòng support"},],
              },
                {id: 17, parentId: 13, departmentName: "Phòng hành chính", numberChild: 0},
                {id: 14, parentId: 13, departmentName: "Phòng marketting", numberChild: 0},
                {id: 16, parentId: 13, departmentName: "Phòng kinh doanh", numberChild: 0},
              ],
              id: 13,
              parentId: 12,
              departmentName: "Phòng ban ứng dụng",
              numberChild: 4
            }],
            id: 12,
            parentId: 11,
            departmentName: "Phòng Văn thư",
            numberChild: 1
          }],
          id: 11,
          parentId: 10,
          numberChild: 1,
          departmentName: "Phòng phó giám đốc"
        }],
        id: 10,
        parentId: 2,
        numberChild: 1,
        departmentName: "Phòng giám đốc"
      }],
      id: 2,
      parentId: 1,
      departmentName: "Phòng tổng giám đốc",
      numberChild: 1
    }];

  departmentNumber: any = [];

  allComplete: boolean = false;

  constructor(
    public route: Router,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.runSlideShow();
    let arr = [{name: 'do'}, {name: 'thanh'}, {name: 'duong'}];
    if (arr.some(p => p.name == 'duong')) {
      console.log('duong')
    } else console.log('not duong');
    // console.log(this.dataArray);
  }

  clickCheck() {
    // let remove = false;
    // let isVariable = {id: 20, departmentName: "Phòng sale"};
    // let data = this.getDataName(isVariable, this.dataArray, this.departmentNumber, remove);
    // console.log(data);

    let promise = new Promise((resolve, reject) => {
      if (true) resolve('result');
      else reject('error');
    })

    promise.then((res) => {
      console.log(res)
    }).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })

  }

  clickCheckNext() {
    // let remove = false;
    // let isVariable = {id: 12, departmentName: "Phòng Văn thư"};
    // let data = this.getDataName(isVariable, this.dataArray, this.departmentNumber, remove);
    // console.log(data);
    // const ob = new Observable((observable: any) => {
    //   observable.next('result 1');
    //   observable.next('result 2');
    //   observable.next('result 3');
    // })
    //
    // const demo = ob.subscribe((res: unknown) => {
    //   console.log(res)
    // }, null, () => {
    //   demo.unsubscribe();
    // })
    const foo = interval(500);
    const bar = interval(700);

    const subscription = foo.subscribe(p => console.log('first' + p));
    const childSub = bar.subscribe(x => console.log('second' + x));

    subscription.add(childSub);
    setTimeout(() => {
      subscription.unsubscribe()
    }, 2000)

  }

  clickCheckDelete() {
    let remove = true;
    let isVariable = {id: 20, departmentName: "Phòng sale"};
    let data = this.getDataName(isVariable, this.dataArray, this.departmentNumber, remove);
    console.log(data);
  }

  // @ts-ignore
  getDataName(isVariable?, node: any, arr: any, remove) {
    if (!node) {
      return [];
    }
    if (!arr) {
      return arr;
    }
    for (let i = 0; i < node.length; i++) {
      if ((isVariable.id == node[i].id || arr.filter((p: { id: any; }) => p.id == node[i].parentId).length > 0)) {
        // xóa 1 bản ghi nào đó
        if (remove && isVariable.id == node[i].id) {
          delete arr[i];
        } else if (arr.filter((item: { id: any }) => item.id == node[i].id).length == 0) {
          arr.push({
            "id": node[i].id,
            "departmentName": node[i].departmentName,
            "parentId": node[i].parentId
          })
        }
      }
      if (node[i].child && node[i].child.length > 0) {
        this.getDataName(isVariable, node[i].child, arr, remove);
      }
    }
    return arr;
  }

  runSlideShow() {

  }

  getData($event: any) {
    console.log($event)
    if ($event.index == 3 && $event.tab.textLabel == 'ĐĂNG XUẤT') {
      this.openDialog();
      // this.route.navigate(['/login']);
    } else if ($event.index == 1 && $event.tab.textLabel == 'GIỚI THIỆU') {
      void this.route.navigate(['/introduce']);
    } else if ($event.index == 2 && $event.tab.textLabel == 'QUẢN LÝ') {
      void this.route.navigate(['menu-food']);
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

  // updateAllComplete() {
  //   this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  // }
  //
  // someComplete(): boolean {
  //   if (this.task.subtasks == null) {
  //     return false;
  //   }
  //   return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  // }
  //
  // setAll(completed: boolean) {
  //   this.allComplete = completed;
  //   if (this.task.subtasks == null) {
  //     return;
  //   }
  //   this.task.subtasks.forEach(t => t.completed = completed);
  // }

}
