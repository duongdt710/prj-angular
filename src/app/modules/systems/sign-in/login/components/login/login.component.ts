import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators, FormGroupDirective, NgForm} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogOverviewComponent} from "../../../../dialog-overview/dialog-overview.component";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {NotifierModule, NotifierOptions, NotifierService} from "angular-notifier";
import {LoginService} from "../../../../../service/login_service/login.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: any;
  private readonly notifier: NotifierService;
  isSuccessLogin: boolean = true;

  notifierDefaultOptions: NotifierOptions = {
    theme: 'material',
    behaviour: {
      autoHide: 5000,
      onClick: false,
      onMouseover: 'pauseAutoHide',
      showDismissButton: true,
      stacking: 4,
    },
    animations: {
      enabled: true,
      show: {
        preset: 'slide',
        speed: 300,
        easing: 'ease',
      },
      hide: {
        preset: 'fade',
        speed: 300,
        easing: 'ease',
        offset: 50,
      },
      shift: {
        speed: 300,
        easing: 'ease',
      },
      overlap: 150,
    },
  }

  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]
  )

  passFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(toString())
    ]
  )


  matcher = new MyErrorStateMatcher();

  constructor(
    public dialog: MatDialog,
    public router: Router,
    notifierService: NotifierService,
    public loginService: LoginService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.name = 'duong';
    const data = {
      name: this.name,
      address: 'Ha Noi'
    }
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    })

  }

  login() {
    // console.log(this.emailFormControl.value);
    // console.log(this.passFormControl.value);
    if (this.emailFormControl.value && this.passFormControl.value) {
      if (((this.emailFormControl.value == "dothanhduongpro@gmail.com") || (this.emailFormControl.value == "0979889156")) && this.passFormControl.value == "thanhduongtlu1996") {
        this.loginService.getDataHome().subscribe((res) => {
          if (res) {
            this.notifier.notify('success', 'Đăng nhập thành công!');
            this.router.navigate(['/home']);
          }
        })

      } else {
        this.notifier.hideNewest();
        this.notifier.notify('error', 'Tài khoản đăng nhập của bạn không đúng, vui lòng nhập lại!');
      }
    } else {
      this.notifier.hideNewest();
      this.notifier.notify('error', 'Bạn vui lòng nhập Email hoặc sđt và password để đăng nhập!');
    }
  }

  onKeyDownLogin(e: any) {
    if (e.type == "keydown" && e.code == "Enter") {
      if (!this.emailFormControl.value) {
        this.notify('error', 'Vui lòng nhập tên tài khoản Email hoặc Phones để đăng nhập!');
      } else if (!this.passFormControl.value) {
        this.notify('error', 'Vui lòng nhập Password để đăng nhập!');
      } else {
        this.login();
      }
    }
  }


  notify(type: string, message: string) {
    this.notifier.hideNewest();
    this.notifier.notify(type, message);
  }


}
