import { Component, OnInit } from '@angular/core';
import { Menu } from '../_model/menu';
import { MenuService } from '../_service/menu.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-managerdetail',
  templateUrl: './managerdetail.component.html',
  styleUrls: ['./managerdetail.component.css']
})
export class ManagerdetailComponent implements OnInit {
  menus: any;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.loadAllmenuForManager();
  }
  private loadAllmenuForManager() {
    this.menuService.GetAllMenuByAManager().subscribe(res => { this.menus = res; console.log(res); })
  }
  deletemenu(id){
    this.menuService.DeleteMenu(id).subscribe(res => { console.log(res); });
  }
}
