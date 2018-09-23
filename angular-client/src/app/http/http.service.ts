import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  httpGet(url) {
    return this.http.get(url, httpOptions);
  }

  httpPost(url, postBody) {
    return this.http.post(url, postBody, httpOptions);
  }

}
