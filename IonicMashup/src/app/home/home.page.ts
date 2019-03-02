import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchterm: '';
  gender: string;
  accuracy: string;
  constructor( private http: HttpClient ) { }

  ngOnInit() {
  }

  checkGender() {
    const url = 'https://gender-api.com/get?name=' + this.searchterm + '&key=XJzxKUMnEXdfqDNhlp';
    this.http.get(url).subscribe(data => {
        // @ts-ignore
      this.gender = 'The person with the given name is likely to be a ' + data.gender;
        // @ts-ignore
      this.accuracy = 'Accuracy:' + data.accuracy;
    });
  }
}
