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

  constructor(private _authService: AuthService, private router: Router) {
    this.IsLoggedIn = this._authService.isAuthenticated();
    console.log(this.IsLoggedIn);
  }
  user: IUser = {
    userName: '',
    password: ''
  };

  ngOnInit() {
  }

  IsLoggedIn: boolean = false;
  IsBusy: boolean = false;

  login() {
    this.IsBusy = true;
    this._authService.login(this.user)
      .subscribe(success => {
        console.log('login success' + <any>success.token);
        this.IsBusy = false;
        this.router.navigate(['/home']);
      },
        error => {
          console.log('login error' + <any>error);
          this.IsBusy = false;
        });
  } 
}
