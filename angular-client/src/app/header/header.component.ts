import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userId = 'User Name';
  public isLoginPage = false;

  constructor(private loginService: LoginService, private router : Router) { }

  ngOnInit() {
    this.userId = this.loginService.userId;
    this.isLoginPage = this.loginService.isLoginPage;
  }

  logout() {
    this.loginService.logout().subscribe(res => {
      console.log(res);
      this.router.navigate(['login']);
    }, err => {
      console.log(err);
    })

    return false;
  }

  func() {
    return false;
  }

}
