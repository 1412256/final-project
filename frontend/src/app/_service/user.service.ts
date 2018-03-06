import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { appConfig } from '../app.config';
import { User } from '../_model/user';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  create(user: User) {
    return this.http.post(appConfig.apiUrl + '/api/auth/register', user);
}
}
