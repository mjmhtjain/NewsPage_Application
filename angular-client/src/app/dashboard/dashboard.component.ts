import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { AddNewsService } from '../add-news/add-news.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public newsList: any;

  constructor(private dashboardService: DashboardService, private newsService: AddNewsService) { }

  ngOnInit() {
    this.fetchNewsList();

    this.newsService.newsObservable.subscribe(res => {
      // console.log("News Received : "+ res);
      if (this.newsList && this.newsList.length >= 0) {
        this.newsList.push(res);
      }
    }, err => {
      console.log(err);
    })
  }

  fetchNewsList() {
    this.dashboardService.fetchNewsList().subscribe(res => {
      if (res['success']) {
        console.log(res['data']);
        this.newsList = res['data'];
      } else {

      }
    }, err => {
      console.log(err);
    })
  }
}
