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
import { HttpResponse } from '@aspnet/signalr';


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

  public login(user: IUser): Observable<IToken> {
    return this._httpClient.post<IToken>(environment.loginUrl, user, httpOptions)
    .do(e => { this.saveToken(e); })
    .catch(this.handleError);
  }

  public getToken(): IToken {
    let tokenString = localStorage.getItem('token');
    if(tokenString === null){
      return {
        token: "",
        expiry: null
      };
    }
    const token = <IToken>JSON.parse(tokenString);
    console.log(JSON.stringify(token));
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

  public register(user: IUser): Observable<Response> {
    return this._httpClient.post<Response>(environment.registrationIUrl, user, httpOptions)
      .do(e => { console.log('success registration'); })
      .catch(this.handleError);
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
