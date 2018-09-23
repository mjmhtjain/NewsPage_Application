import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginId;
  public password;
  public newsList: any;

  constructor(private loginService: LoginService, private router: Router, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.fetchNewsList(); 
  }

  func(){
    return false;
  }

  fetchNewsList() {
    this.dashboardService.fetchNewsList().subscribe(res => {
      if (res['success']) {
        // console.log(res['data']);
        this.newsList = res['data'];
      } else {

      }
    }, err => {
      console.log(err);
    })
  }

  submit(f: NgForm) {
    if (f.valid) {
      let loginInfo = {
        userId: this.loginId,
        password: this.password
      }

      this.loginService.login(loginInfo).subscribe(res => {
        if (res['success']) {
          // console.log(res['data']);
          this.loginService.userId = res['data']['userId'];
          this.router.navigate(['dashboard']);
        } else {

        }
      }, err => {
        console.log(err);
      })
    }
  }

}
