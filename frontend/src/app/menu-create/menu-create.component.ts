import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Menu} from '../_model/menu';
import {MenuService} from '../_service/menu.service';
@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.css']
})
export class MenuCreateComponent implements OnInit {
  menu: any = {};
  
  constructor( private router: Router,private menuService: MenuService,) { }

  ngOnInit() {
  }
  createMenu(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.menu.creator = currentUser.user;
      this.menuService.createMenu(this.menu)
        .subscribe(
          data => {
          
            this.router.navigate(['/manager/menu']);
        },
        error => {
          console.log("error");
        });
        
  }
}
