import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router) { }
  user: IUser = {
    userName: '',
    password: ''
  };
  ngOnInit() {

  }
  IsBusy: boolean = false;
  register() {
    this.IsBusy = true;
    this._authService.register(this.user).subscribe(success => {
      this.IsBusy = false;
      console.log('registration success');
      this.router.navigate(['login']);
    }, error => {
      this.IsBusy = false;;
      console.log('registration error' + <any>error);
    });
  }
}
