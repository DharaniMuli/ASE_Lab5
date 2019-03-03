import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {computeMsgId} from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = { email: '', password: '' };
  InvalidUser = false;
  constructor(private router: Router, public  ngAuth: AngularFireAuth ) { }

  ngOnInit() {
  }

  async login() {
    try {
      const res = await this.ngAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      this.router.navigate(['home']);
    } catch (err) {
      this.InvalidUser = true;
    }
  }

}
