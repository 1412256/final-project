import { Component, OnInit ,ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Item} from '../_model/item';
import { appConfig } from '../app.config';
import {ItemService} from '../_service/item.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private elementRef: ElementRef, private route: ActivatedRoute, private http: HttpClient, private itemService: ItemService, private router:Router) { }
  id: number;
  private sub: any;
  items: {}; 
  ngOnInit() {
    this.getCategoryDetail(this.route.snapshot.params['id']);


  }
  get(id){
    return this.http.get(appConfig.apiUrl + '/api/category/'+id);
  }
   getCategoryDetail(id) {
    this.get(id).subscribe(items => {this.items = items;})
  }
  deleteitem(id){
    this.itemService.DeleteItem(id).subscribe( data => {
          
      this.get(this.route.snapshot.params['id']).subscribe(items => {this.items = items;})
    },
  error => {
    console.log("error");
  }
    )
  }
}
