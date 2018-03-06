import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { appConfig } from '../app.config';
import { Menu } from '../_model/menu';
import {Category} from '../_model/category';
@Injectable()
export class MenuService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Menu[]>(appConfig.apiUrl + '/api/menu/request-menu');
}


}
