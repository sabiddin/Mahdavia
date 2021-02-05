import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  private message: string;
  validationErrors: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  get404Error(){
    this.http.get(baseUrl + 'Buggy/not-found').subscribe(
      response =>{
        console.log(response);
      },
      error => {
        console.log(error);
        this.validationErrors =  error;
      });
  }
  get401Error(){
    this.http.get(baseUrl + 'Buggy/auth').subscribe(
      response =>{
        console.log(response);
      },
      error => {
        console.log(error);
        this.validationErrors =  error;
      });
  }
  get500Error(){
    this.http.get(baseUrl + 'Buggy/server-error').subscribe(
      response =>{
        console.log(response);
      },
      error => {
        console.log(error);
        this.validationErrors =  error;
      });
  }
  get400Error(){
    this.http.get(baseUrl + 'Buggy/bad-request').subscribe(
      response =>{
        console.log(response);
      },
      error => {
        console.log(error);
        this.validationErrors =  error;
      });
  }
  get400ValidationErrors(){
    this.http.post(baseUrl + 'Account/register', {}).subscribe(
      response =>{
        console.log(response);
      },
      error => {
        console.log(error);
        this.validationErrors =  error;
      });
  }


}
