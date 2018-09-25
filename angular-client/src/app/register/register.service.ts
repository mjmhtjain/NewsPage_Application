import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpService : HttpService) { }

  public register(userDetails){
    return this.httpService.httpPost('/register', userDetails);
  }
}
