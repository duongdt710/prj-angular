import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowLoadingComponent} from "../component/show-loading/show-loading.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [ShowLoadingComponent],
  exports: [
    ShowLoadingComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
