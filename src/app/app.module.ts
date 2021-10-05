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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import { DialogOverviewComponent } from './modules/systems/dialog-overview/dialog-overview.component';
import {MatDialogModule} from "@angular/material/dialog";
import { HomeComponent } from './modules/systems/home/components/home.component';
import {NotifierModule} from "angular-notifier";
import {MatCarouselModule} from "@ngmodule/material-carousel";
import {MatTabsModule} from "@angular/material/tabs";
import { IntroduceComponent } from './modules/systems/introduce/introduce.component';
import { MenuFoodComponent } from './modules/systems/menu-food/menu-food.component';
import {NgxOtpInputModule} from "ngx-otp-input";
import {MatRadioModule} from "@angular/material/radio";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import {Http_interceptor} from "./interceptor";
import {LoginService} from "./modules/service/login_service/login.service";
import {SharedModule} from "./shared/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    SystemsComponent,
    HeaderComponent,
    FooterComponent,
    ForgetPassComponent,
    LoginComponent,
    DialogOverviewComponent,
    HomeComponent,
    IntroduceComponent,
    MenuFoodComponent
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
    MatDialogModule,
    NotifierModule.withConfig({}),
    MatCarouselModule.forRoot(),
    MatTabsModule,
    NgxOtpInputModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Http_interceptor, multi: true}
  ],
  entryComponents: [DialogOverviewComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
