import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpService : HttpService) { }

  fetchNewsList(){
    return this.httpService.httpGet('/fetchAllNewsArticles');
  }
}
