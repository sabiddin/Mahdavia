import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  isLoggedIn = false;
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {    
  }
  login() {
    this.accountService.login(this.model).subscribe(
      user => {
        console.log(user);
      },
      error => {
        console.log(error);
      });
    console.log();
  }
  logout() {
    this.accountService.logout();
  }

}
