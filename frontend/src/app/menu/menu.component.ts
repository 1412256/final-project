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
  category: Category[] = [];
  
  constructor(private elementRef:ElementRef, private route: ActivatedRoute, private http: HttpClient, private menuService: MenuService) { }

  ngOnInit() {
    this.getMenuDetail(this.route.snapshot.params['id']);

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/drop-menu.js";

    this.elementRef.nativeElement.appendChild(s);

    var s1 = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/ziehharmonika.js";

    this.elementRef.nativeElement.appendChild(s1);
}
  get(id){
    return this.http.get<Category[]>(appConfig.apiUrl + '/api/menu/'+id);
  }
   getMenuDetail(id) {
    this.get(id).subscribe(category => {this.category = category;})
  }
 
}
