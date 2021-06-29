import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/systems/sign-in/login/components/login/login.component";
import {HomeComponent} from "./modules/systems/home/components/home.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
