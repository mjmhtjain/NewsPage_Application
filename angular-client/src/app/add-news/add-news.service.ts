import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNewsService {

  public news = new Subject();
  public newsObservable = this.news.asObservable();

  constructor(private http: HttpService) { }

  public addNewsUrl(newsUrl){
    return this.http.httpPost('scrape', newsUrl);
  }

  public notifyNews(newsObject){
    this.news.next(newsObject);
  }
}
