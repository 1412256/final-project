import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from "@angular/http"
import { appConfig } from '../app.config';
import { Menu } from '../_model/menu';
import {Category} from '../_model/category';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  createCategory(id,category: Category){
    
    return this.http.post(appConfig.apiUrl +'/api/menu/'+id,category, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
                                .set('Access-Control-Allow-Headers', 'Content-Type')});
  }
}
