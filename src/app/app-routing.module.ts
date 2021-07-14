import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/systems/sign-in/login/components/login/login.component";
import {HomeComponent} from "./modules/systems/home/components/home.component";
import {IntroduceComponent} from "./modules/systems/introduce/introduce.component";
import {MenuFoodComponent} from "./modules/systems/menu-food/menu-food.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'introduce', component: IntroduceComponent},
  {path: 'menu-food', component: MenuFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
