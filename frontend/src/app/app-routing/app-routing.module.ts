import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './../home/home.component'; 
import {LoginComponent} from './../login/login.component';
import {RegisterComponent} from './../register/register.component';
import {MenuComponent} from './../menu/menu.component';
import {MenulistComponent} from './../menulist/menulist.component';
import {AdmincheckComponent} from './../admincheck/admincheck.component'
import { Route } from '@angular/compiler/src/core';
import { AuthGuard } from '../_guard/auth-guard.service';
import {RoleGuard} from   '../_guard/role-guard.service';
import { CategoryComponent } from '../category/category.component';
const routes: Routes = [
  {path:'',component:HomeComponent,canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'menu/:id',component:MenuComponent},

  {path:'menu',component:MenulistComponent,canActivate: [AuthGuard]},
  {path:'category/:id',component:CategoryComponent},
  { 
    path: 'admin', 
    component: AdmincheckComponent, 
    canActivate: [RoleGuard], 
    data: { 
      expectedRole: 'admin'
    } 
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
