import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginId;
  public password;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  submit(f: NgForm) {
    if (f.valid) {
      // console.log(this.loginId + "   " + this.password);
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
