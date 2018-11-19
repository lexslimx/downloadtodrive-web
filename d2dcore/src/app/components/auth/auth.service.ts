import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { IToken } from './token';
import { IUser } from './user';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { environment } from '../../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AuthService implements CanActivate {

  constructor(private _httpClient: HttpClient, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.isAuthenticated()) {
    //  return true;
    // };
    // else {
    //  this.router.navigate(['login']);
    //  return false;
    // }
    return true;
  }

  public login(user: IUser) {
    return this._httpClient.post(environment.loginUrl, user, httpOptions)
    .subscribe(
      data => {
          console.log('login Request is successful ', data);
          this.saveToken(<IToken>data);
      },
      error => {
          console.log('Error', error);
      }
  );
  }

  public getToken(): IToken {
    const token = <IToken>JSON.parse(localStorage.getItem('token'));
    return token;
  }

  private saveToken(token: IToken): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('token');
  }

  private handleError(err: HttpErrorResponse) {
    return Observable.throw(err);
  }


  public register(user: IUser) {
    this._httpClient.post(environment.registrationIUrl, user, httpOptions)
        .subscribe(
            data => {
                console.log('POST Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            }
        );
  }

  public isAuthenticated(): boolean {
    const token: IToken = JSON.parse(localStorage.getItem('token'));

    if (token !== null) {
      return true;
    } else {
      return false;
    }
  }

}
