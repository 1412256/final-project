import { Component, OnInit } from '@angular/core';
import {Menu} from '../_model/menu';
import {MenuService} from '../_service/menu.service';
@Component({
  selector: 'app-admincheck',
  templateUrl: './admincheck.component.html',
  styleUrls: ['./admincheck.component.css']
})
export class AdmincheckComponent implements OnInit {

  menus: Menu[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.loadAllmenu();
  }
  private loadAllmenu(){
    this.menuService.getAllRequestMenu().subscribe(menus => {this.menus = menus;})
 }
 checkMenu(){
    
 }
}
