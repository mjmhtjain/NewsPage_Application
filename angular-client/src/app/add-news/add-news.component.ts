import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  public newUrl = '';

  constructor() { }

  ngOnInit() {
  }

}
