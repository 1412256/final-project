import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './../home/home.component'; 
import {LoginComponent} from './../login/login.component';
import {RegisterComponent} from './../register/register.component';
import {MenuComponent} from './../menu/menu.component';
import {MenulistComponent} from './../menulist/menulist.component';
import { Route } from '@angular/compiler/src/core';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'menu/:id',component:MenuComponent},
  {path:'menulist',component:MenulistComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
