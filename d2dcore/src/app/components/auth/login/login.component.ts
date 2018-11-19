import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService) { }
  user: IUser = {
    email: '',
    password: ''
  }

  ngOnInit() {
  }


  login() {
    this._authService.login(this.user).subscribe(response => {
      console.log('successful login');
    }, error => {
        console.log('error with login');
      });
  }

}
