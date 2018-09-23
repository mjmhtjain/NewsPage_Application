import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userId = 'User Name';

  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.userId = this.loginService.userId;
  }

  logout(){
    this.loginService.logout();
  }

}
