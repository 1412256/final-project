import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from "@angular/http"
import { appConfig } from '../app.config';
import { Menu } from '../_model/menu';
import {Category} from '../_model/category';
@Injectable()
export class MenuService {
menu: Menu;
  constructor(private http: HttpClient) { }
  getAllPublishMenu() {
    return this.http.get<Menu[]>(appConfig.apiUrl + '/api/menu/publish-menu');
}
  getAllRequestMenu() {
    return this.http.get<Menu[]>(appConfig.apiUrl + '/api/menu/request-menu');
  }
   checkmenu(id){
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    //let options = new RequestOptions({ headers: headers });
  
    return this.http.post(appConfig.apiUrl +'/api/menu/'+ id+'/accept',{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
                                .set('Access-Control-Allow-Headers', 'Content-Type')});
  } 
  createMenu(menu: Menu){
    
    return this.http.post(appConfig.apiUrl +'/api/menu/create',menu, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
                                .set('Access-Control-Allow-Headers', 'Content-Type')});
  }
  updateMenu(menu: Menu,id){
    return this.http.post(appConfig.apiUrl +'/api/menu/'+id+ '/update',menu, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
                                .set('Access-Control-Allow-Headers', 'Content-Type')})
  }
  GetAllMenuByAManager(){

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let id = currentUser.user._id;
    console.log(id);
    return this.http.get(appConfig.apiUrl + '/api/manager/'+ id);
  }
  DeleteMenu(id){
    return this.http.post(appConfig.apiUrl +'/api/menu/'+ id + '/delete',{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
                                .set('Access-Control-Allow-Headers', 'Content-Type')})
  }
}
