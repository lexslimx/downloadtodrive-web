import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../user';
import { Router } from '@angular/router';

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
    this._authService.login(this.user).subscribe(response => {
      this.router.navigate(['/home']);
    }, error => {
        console.log('error with login');
      });
  }

}
