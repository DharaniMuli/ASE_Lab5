import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = { email: '', password: '' };
  InvalidUser = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.InvalidUser = true;
    let stored_user =  localStorage.getItem(this.user.email);
    if (stored_user != null) {
      stored_user = JSON.parse(stored_user);
      // @ts-ignore
      if (this.user.password === stored_user.password) {
        this.router.navigate(['home']);
        this.InvalidUser = false;
      }
    }
  }

}
