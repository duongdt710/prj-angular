import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { SystemsComponent } from './modules/systems/systems.component';
import {MatInputModule} from "@angular/material/input";
import {SystemsModule} from "./modules/systems/systems/systems.module";
import {MatIconModule} from "@angular/material/icon";
import {HeaderComponent} from "./modules/layouts/header/header.component";
import {HeaderModule} from "./modules/layouts/header/header/header.module";
import { FooterComponent } from './modules/layouts/footer/components/footer/footer.component';
import { ForgetPassComponent } from './modules/systems/sign-in/forget-pass/forget-pass/forget-pass.component';
import {LoginComponent} from "./modules/systems/sign-in/login/components/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import { DialogOverviewComponent } from './modules/systems/dialog-overview/dialog-overview.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    SystemsComponent,
    HeaderComponent,
    FooterComponent,
    ForgetPassComponent,
    LoginComponent,
    DialogOverviewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatInputModule,
        MatIconModule,
        SystemsModule,
        HeaderModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDialogModule

    ],
  providers: [],
  entryComponents: [DialogOverviewComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
