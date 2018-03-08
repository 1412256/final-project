import { Component, OnInit } from '@angular/core';
import {Menu} from '../_model/menu';
import {MenuService} from '../_service/menu.service';
@Component({
  selector: 'app-managerdetail',
  templateUrl: './managerdetail.component.html',
  styleUrls: ['./managerdetail.component.css']
})
export class ManagerdetailComponent implements OnInit {
  menus: any;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.loadAllmenuForManger();
  }
  private loadAllmenuForManger(){
    this.menuService.GetAllMenuByAManager().subscribe(menus => {this.menus = menus; console.log(menus);})
 }
}
