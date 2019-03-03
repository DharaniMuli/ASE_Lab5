import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import * as firebase from 'firebase';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchterm: '';
  gender: string;
  accuracy: string;

  history = [];
  ref = firebase.database().ref('history/');


  constructor( private http: HttpClient, private tts: TextToSpeech ) {
    this.ref.orderByChild('Name').equalTo(firebase.auth().currentUser.email).on('value', resp => {
      this.history = [];
      this.history = snapshotToArray(resp);
    });
  }

  ngOnInit() {
  }

  checkGender() {
    const url = 'https://gender-api.com/get?name=' + this.searchterm + '&key=XJzxKUMnEXdfqDNhlp';
    this.http.get(url).subscribe(data => {
        // @ts-ignore
      this.gender = 'The person with the given name is likely to be a ' + data.gender;
        // @ts-ignore
      this.accuracy = 'Accuracy:' + data.accuracy;
      firebase.database().ref('history/').push({Name: firebase.auth().currentUser.email, Value: this.searchterm});
      this.tts.speak(this.gender)
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
    });
  }
}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
