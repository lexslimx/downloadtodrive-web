import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {

  }

  user: IUser = {
    email: '',
    password: ''
  }

  register() {
    this._authService.register(this.user).subscribe(response => {
      console.log('successful registration');
    }, error => { });
  }
}
