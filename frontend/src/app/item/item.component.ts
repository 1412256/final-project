import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Item } from '../_model/item';
import { ItemService } from '../_service/item.service';
import { appConfig } from '../app.config';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private elementRef: ElementRef, private route: ActivatedRoute, private http: HttpClient, private itemService: ItemService, private router: Router) { }
  item: {};
  currentUser: any;
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getItemDetail(this.route.snapshot.params['id']);
  }
  get(id) {
    return this.http.get(appConfig.apiUrl + '/api/item/' + id);
  }
  getItemDetail(id) {
    this.get(id).subscribe(item => { this.item = item; })
  }
  checkManager() {
    if (this.currentUser && this.currentUser.user.role == "manager")
      return true;
    else
      return false;
  }
}
