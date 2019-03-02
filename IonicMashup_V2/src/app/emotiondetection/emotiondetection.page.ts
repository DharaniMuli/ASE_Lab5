import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-emotiondetection',
  templateUrl: './emotiondetection.page.html',
  styleUrls: ['./emotiondetection.page.scss'],
})
export class EmotiondetectionPage implements OnInit {

  searchterm: '';
  searchResult: '';
  constructor( private http: HttpClient) { }

  ngOnInit() {
  }
  findEmotion() {
    this.http.get('https://cors-anywhere.herokuapp.com/https://api.uclassify.com/v1/uClassify/Sentiment/classify/?readKey=DyLNsR66KSvN&text='+this.searchterm)
        .subscribe(data => {
        // @ts-ignore
          this.searchResult = 'Positivity :' + data.positive;

    });
  }
}
