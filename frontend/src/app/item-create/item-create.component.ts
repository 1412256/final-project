import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Item} from '../_model/item';
import {ItemService} from '../_service/item.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  item: any = {};
  constructor(private router: Router,private itemService: ItemService,private route: ActivatedRoute) { }

  ngOnInit() {
  }
  createItem(){
    let id = this.route.snapshot.params['id'];
    this.itemService.createItem(id , this.item)
      .subscribe(
        data => {
        
          this.router.navigate(['category/'+id]);
      },
      error => {
        console.log("error");
      });
      
}
}
