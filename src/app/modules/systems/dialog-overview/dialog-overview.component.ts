import {Component, OnInit, Inject, NgModule, ViewChild} from '@angular/core';
import {global} from "@angular/compiler/src/util";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoginComponent} from "../sign-in/login/components/login/login.component";
import {Router} from "@angular/router";
import {NgxOtpInputComponent, NgxOtpInputConfig} from "ngx-otp-input";
import {migrateLegacyGlobalConfig} from "@angular/cli/utilities/config";
import {HomeComponent} from "../home/components/home.component";

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})

export class DialogOverviewComponent implements OnInit {
  @ViewChild('ngxotp') ngxOtp: NgxOtpInputComponent | any;
  data: unknown;
  showNgxOtpInput = true;

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };

  constructor(
    public router: Router,
    private dialogRef: MatDialogRef<DialogOverviewComponent>,
    public dialog: MatDialog
  ) {
    dialogRef.disableClose = true;
  }

  regex: any;
  ariaLabels: any;
  ngxOtpDisable = false;
  status: any;

  otpChangeResult: any;
  fillResult: any;

  ngOnInit() {
    console.log(this.data);
  }

  // reload(): void {
  //   this.showNgxOtpInput = false;
  //   setTimeout(() => {
  //     this.showNgxOtpInput = true;
  //   });
  // }

  // setRegex(): void {
  //   this.otpInputConfig.pattern = new RegExp(this.regex);
  // }

  // setAriaLabels(): void {
  //   const arr = this.ariaLabels.split(',');
  //   if (arr.length === 1) {
  //     this.otpInputConfig.ariaLabels = arr[0];
  //   } else {
  //     this.otpInputConfig.ariaLabels = arr.map((entry: any) =>
  //       entry.replace(/\s/g, '')
  //     );
  //   }
  // }

  // clear(): void {
  //   this.ngxOtp.clear();
  // }

  acceptRequest() {
    this.dialogRef.close();
    void this.router.navigate(['/login'], {});
  }

}
