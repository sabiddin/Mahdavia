import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mahdvia app';
  users: any = [];
  /**
   *
   */
  constructor(private _http: HttpClient) { }
  ngOnInit(): void {
    this._http.get(baseUrl + 'Users').subscribe( data =>
      {
      this.users = data;
    }
    ,    error =>
    {
      console.log(error);
    });
  }
  
}
