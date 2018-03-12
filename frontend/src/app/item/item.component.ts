import { Component, OnInit ,ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Item} from '../_model/item';
import { appConfig } from '../app.config';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private elementRef: ElementRef, private route: ActivatedRoute, private http: HttpClient) { }
  item: {}; 
  ngOnInit() {
    this.getItemDetail(this.route.snapshot.params['id']);
  }
  get(id){
    return this.http.get(appConfig.apiUrl + '/api/item/'+id);
  }
   getItemDetail(id) {
    this.get(id).subscribe(item => {this.item = item;})
  }
}
