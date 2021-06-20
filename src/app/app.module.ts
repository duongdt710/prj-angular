import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    SystemsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    SystemsModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
