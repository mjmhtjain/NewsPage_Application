import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public name = '';
  public email = '';
  public userId = '';
  public password = '';
  public alert: any;
  public alertOpen = false;
  public hideForm = false;

  constructor(private registerService: RegisterService, private router : Router) { }

  ngOnInit() {
  }

  register(form) {

    if (this.userId.trim() && this.password.trim() && this.name.trim() && this.email.trim()) {
      let userDetails = {
        name: this.name,
        email: this.email,
        password: this.password,
        userId: this.userId
      }

      this.registerService.register(userDetails).subscribe(res => {
        if (res['success']) {
          console.log(res['data']);
          this.openAlert('Done :)', 'success');
          // form.reset();
          this.hideForm = true;
        } else {
          this.openAlert(res['message'], 'danger');
        }
      }, err => {
        console.log(err);
      })

    } else {
      this.openAlert('Invalid Details', 'danger');
      form.reset();
    }

    // form.reset();
  }

  closeAlert() {
    this.alertOpen = false;
  }

  openAlert(message, alertType) {
    this.alert = {
      timeout: 3000,
      message: message,
      type: alertType
    };

    this.alertOpen = true;
  }

}
