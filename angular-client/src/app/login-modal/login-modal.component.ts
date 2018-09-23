import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  public loginId;
  public password;
  public showModalWindow = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  closeModal(){

  }

  showModal(){
    this.showModalWindow = true;
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
    }else{

    }
  }

}
