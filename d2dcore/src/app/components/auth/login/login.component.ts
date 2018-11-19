import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../user';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router) { }
  user: IUser = {
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  login() {
    this._authService.login(this.user)
    .subscribe(success => {
      console.log('result login ' + <any>success);
      this.router.navigate(['home']);
      },
      error => {
        console.log('login error' + <any>error);
      });
  }

}
