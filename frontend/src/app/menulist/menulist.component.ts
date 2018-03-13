import { Component, OnInit } from '@angular/core';
import { Menu } from '../_model/menu';
import { MenuService } from '../_service/menu.service';
@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
  menus: Menu[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.loadAllmenu();
  }
  private loadAllmenu() {
    this.menuService.getAllPublishMenu().subscribe(menus => { this.menus = menus; })
  }
}
