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

  ngOnInit() {

  }

  user: IUser = {
    email: '',
    password: ''
  }

  register() {
    this._authService.register(this.user).subscribe(response => {
      this.router.navigate(['/login']);
    }, error => { });
  }
}
