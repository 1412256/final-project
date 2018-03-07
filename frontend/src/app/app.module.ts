import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenulistComponent } from './menulist/menulist.component';
import { AlertComponent } from './alert/alert.component';

import { AuthGuard} from './_guard/auth-guard.service';
import { RoleGuard} from './_guard/role-guard.service';
import { AlertService} from './_service/alert.service';
import { AuthenticationService} from './_service/authencication.service';
import { UserService} from './_service/user.service';
import { MenuService} from './_service/menu.service';
import { JwtInterceptorProvider} from './_helper/jwt.service';
import { ErrorInterceptorProvider} from './_helper/error.service';
import { CategoryComponent } from './category/category.component';
import { AdmincheckComponent } from './admincheck/admincheck.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MenuComponent,
    MenulistComponent,
    AlertComponent,
    CategoryComponent,
    AdmincheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    AlertService,
    AuthenticationService,
    UserService,
    MenuService,
    JwtInterceptorProvider,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
