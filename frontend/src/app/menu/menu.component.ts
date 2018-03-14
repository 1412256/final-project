import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app.config';
import { Category } from '../_model/category';
import  {MenuService} from '../_service/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id: number;
  private sub: any;
  //category: Category[] = [];
  menus: any;
  items: any;
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
 
  getCategory(id){
    return this.http.get(appConfig.apiUrl + '/api/category/'+id);
  }
   getCategoryDetail(id) {
    this.getCategory(id).subscribe(items => {this.items = items;})
  }
}
