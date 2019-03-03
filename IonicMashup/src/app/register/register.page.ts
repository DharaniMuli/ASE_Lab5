import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  firstname: string = ""
  lastname: string = ""
  email: string = ""
  password: string = ""
  cpassword:string = ""


  constructor( public afAuth: AngularFireAuth, private router: Router ) {
  }

  ngOnInit() {
  }

  register() {
    const {firstname, lastname, email, password, cpassword } = this
    if (password !== cpassword) {
      return console.error('Password don\'t match');
    }
    try {
      const result = this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      this.router.navigate(['login']);
    } catch (err) {
      console.dir(err);
    }

  }

}
