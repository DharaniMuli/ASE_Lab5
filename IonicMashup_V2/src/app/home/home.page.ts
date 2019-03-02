import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, ToastController} from '@ionic/angular';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchterm: '';
  gender: string;
  constructor( private http: HttpClient, public afAuth: AngularFireAuth, private toast: ToastController, private tts: TextToSpeech) { }

  ngOnInit() {
  }

  checkGender() {
    const url = 'https://gender-api.com/get?name=' + this.searchterm + '&key=XJzxKUMnEXdfqDNhlp';
    this.http.get(url).subscribe(data => {
        // @ts-ignore
      this.gender = 'The person with the given name is likely to be a ' + data.gender;
        // @ts-ignore
      this.accuracy = 'Accuracy:' + data.accuracy;
      this.tts.speak('Hello World')
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
    });
  }
}
