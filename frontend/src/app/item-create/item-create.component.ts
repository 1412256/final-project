import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../_model/item';
import { ItemService } from '../_service/item.service';
import { AlertService } from '../_service/alert.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { appConfig } from '../app.config';
@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  filesToUpload: Array<File> = [];
  item: any = {};
  constructor(private router: Router, private itemService: ItemService, private route: ActivatedRoute, private http: HttpClient, private alertService: AlertService) { }

  ngOnInit() {
  }
  createItem() {
    let id = this.route.snapshot.params['id'];
    /* this.create(id , this.item)
      .subscribe(
        data => {
        
          this.router.navigate(['category/'+id]);
      },
      error => {
        console.log("error");
      }); */
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append("name", this.item.name);
    formData.append("price", this.item.price);
    formData.append("ingredient", this.item.ingredient);
    formData.append("uploads[]", files[0], files[0]['name']);
    this.http.post(appConfig.apiUrl + '/api/category/' + id, formData,
      {
        headers: new HttpHeaders()
          .set('Accept', 'application/json')
          .set('Access-Control-Allow-Headers', 'Content-Type')
      }).subscribe(
        data => {

          this.router.navigate(['category/' + id]);
        },
        error => {
          console.log("error");

        });


  }
  /* create(id , item){
   
    return this.http.post(appConfig.apiUrl +'/api/category/'+ id ,item, {
      headers: new HttpHeaders().set('Content-Type', 'multipart/form-data')
                                .set('Accept', 'application/json')
                                .set('Access-Control-Allow-Headers', 'Content-Type')});
  } */

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
