import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from "@angular/http"
import { appConfig } from '../app.config';
import {Item } from '../_model/item';
import {Category} from '../_model/category';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }
  updateItem(item,id){
    return this.http.post(appConfig.apiUrl +'/api/item/'+id+ '/update',item, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
                                .set('Access-Control-Allow-Headers', 'Content-Type')})
  }
}