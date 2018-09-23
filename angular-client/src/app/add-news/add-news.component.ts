import { Component, OnInit } from '@angular/core';
import { AddNewsService } from './add-news.service';

@Component({
  selector: 'add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  public newUrl = '';

  constructor(private addNewsService: AddNewsService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.newUrl) {
      let urlMessage = {
        url: this.newUrl
      };
      this.addNewsService.addNewsUrl(urlMessage).subscribe(res => {
        if (res['success']) {
          console.log(res['data']);
          this.addNewsService.notifyNews(res['data']);
        } else {
          console.log(res['message']);
        }

      }, err => {
        console.log(err);
      })
    }
  }

}
