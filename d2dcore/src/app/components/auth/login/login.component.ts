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
    const result = this._authService.login(this.user);
    console.log('result login ' + <any>result);
    this.router.navigate(['home']);
  }

}
