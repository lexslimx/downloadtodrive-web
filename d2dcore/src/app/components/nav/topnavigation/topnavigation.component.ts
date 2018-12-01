import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.css']
})
export class TopnavigationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  currentAction = 'Sign In';
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.currentAction = 'Sign Out';
    } else {
      this.currentAction = 'Sign In';
    }
  }

  logIn() {
    if (this.authService.isAuthenticated()) {
      this.authService.logout();
       this.router.navigate(['login']);
       this.currentAction = 'Sign In';
    } else {
      this.router.navigate(['login']);
      this.currentAction = 'Sign In';
    }
  }
}
