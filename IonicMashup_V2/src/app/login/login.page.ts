import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string =""
  InvalidUser = false;

  constructor(private router: Router, public afAuth: AngularFireAuth) { }
  ngOnInit() {
  }

async  login() {
    const {email, password } = this
      try{
        const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        if(result){
          this.router.navigate(['home']);
        }

      }
      catch(err){
       console.dir(err);
       if (err.code === "auth/invalid-email"){
          console.log("User not found");
       }
      }
  }

}
