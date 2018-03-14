import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app.config';
import { Category } from '../_model/category';
import  {MenuService} from '../_service/menu.service';

@Component({
  selector: 'app-menu-manager',
  templateUrl: './menu-manager.component.html',
  styleUrls: ['./menu-manager.component.css']
})
export class MenuManagerComponent implements OnInit {
  menus: any;
  constructor(private elementRef:ElementRef, private route: ActivatedRoute, private http: HttpClient, private menuService: MenuService) { }

  ngOnInit() {
    this.getMenuDetail(this.route.snapshot.params['id']);
  }
  getMenu(id){
    return this.http.get(appConfig.apiUrl + '/api/menu/'+id);
  }
   getMenuDetail(id) {
    this.getMenu(id).subscribe(menus=> {this.menus = menus;})
  }
}
