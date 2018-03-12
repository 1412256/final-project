import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import {Item} from '../_model/item';
import { appConfig } from '../app.config';
import {ItemService} from '../_service/item.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {
  
  constructor(private router: Router,private elementRef: ElementRef, private route: ActivatedRoute, private http: HttpClient,private itemService: ItemService) { }
  item: any = {}; 
  filesToUpload: Array<File> = [];
  ngOnInit() {
    this.getItemDetail(this.route.snapshot.params['id']);
  }
  get(id){
    return this.http.get(appConfig.apiUrl + '/api/item/'+id);
  }
   getItemDetail(id) {
    this.get(id).subscribe(item => {this.item = item;})
  }


  updateItem(){
    let id = this.route.snapshot.params['id'];
   
      const formData: any = new FormData();
      const files: Array<File> = this.filesToUpload;
      formData.append("name",this.item.name);
      formData.append("price",this.item.price);
      formData.append("ingredient",this.item.ingredient);
      formData.append("uploads[]", files[0], files[0]['name']);
      this.http.post(appConfig.apiUrl +'/api/item/'+ id+'/update', formData,
      {
        headers: new HttpHeaders()
                                  .set('Accept', 'application/json')
                                  .set('Access-Control-Allow-Headers', 'Content-Type')}).subscribe(
                                    data => {
                                    
                                      this.router.navigate(['item/'+id]);
                                  },
                                  error => {
                                    console.log("error");
                                  });
    
      
}


 fileChangeEvent(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
}
}

