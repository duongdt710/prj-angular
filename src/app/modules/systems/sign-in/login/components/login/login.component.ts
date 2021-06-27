import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroupDirective, NgForm} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogOverviewComponent} from "../../../../dialog-overview/dialog-overview.component";

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
    public dialog: MatDialog
  ) {
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
    console.log(dialogRef);
    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    })

  }

  login() {
    console.log(this.emailFormControl.value);
    console.log(this.passFormControl.value);
  }

}
