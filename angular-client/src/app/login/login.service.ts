import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userId = '';

  constructor(private httpService : HttpService) { }

  login(loginInfo){
    return this.httpService.httpPost('/login', loginInfo);
  }

  logout(){
    this.httpService.httpGet('/logout');
  }
}
