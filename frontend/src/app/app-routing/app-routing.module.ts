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
import { MenuCreateComponent } from '../menu-create/menu-create.component';
import { ManagerdetailComponent } from '../managerdetail/managerdetail.component';
import { CategoryCreateComponent } from '../category-create/category-create.component';
import { ItemCreateComponent } from '../item-create/item-create.component';
const routes: Routes = [
  {path:'',component:HomeComponent,canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'menu/:id',component:MenuComponent},

  {path:'menu',component:MenulistComponent,canActivate: [AuthGuard]},
  {path:'category/:id',component:CategoryComponent, canActivate: [AuthGuard]},
  {path:'menu/:id/create-category',
  component:CategoryCreateComponent,
  canActivate: [RoleGuard],
  data:{
    expectedRole: 'manager'
  }
},
{path:'category/:id/create-item',
  component:ItemCreateComponent,
  canActivate: [RoleGuard],
  data:{
    expectedRole: 'manager'
  }
},
  { 
    path: 'admin', 
    component: AdmincheckComponent, 
    canActivate: [RoleGuard], 
    data: { 
      expectedRole: 'admin'
    } 
  },
  {
    path:'manager/menu/create',
  component:MenuCreateComponent,
  canActivate: [RoleGuard], 
  data: { 
    expectedRole: 'manager'
  }
  },
  {
    path:'manager/menu',
  component: ManagerdetailComponent,
  canActivate: [RoleGuard], 
  data: { 
    expectedRole: 'manager'
  }
  }  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
