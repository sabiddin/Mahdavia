import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  login() {
    this.accountService.login(this.model).subscribe(
      user => {
        this.toastr.success('Login successfull', 'Success');
        this.router.navigateByUrl('/members');
      });
  }
  logout() {
    this.accountService.logout();
    this.toastr.success('Logout successfull', 'Success');
    this.router.navigateByUrl('/');
  }

}
