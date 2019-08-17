import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { environment } from '../../../environments/environment';
import { IYoutubeDownloadRequest } from './downloadLinksResponse';
import { AuthService } from '../auth/auth.service';
import { HttpResponse } from '@aspnet/signalr';


@Injectable({
  providedIn: 'root'
})
export class DownloadBarService {

  constructor(private _httpClient: HttpClient, private _authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this._authService.getToken().token
    });
    return headers;
  }


  private handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }

  getYoutubeLinks(youtubeLink: string): Observable<IYoutubeDownloadRequest> {
    const headers = this.getHeaders();
    return this._httpClient.get<IYoutubeDownloadRequest>(
      environment.ytServiceUrl + "?youtubeLink=" + youtubeLink , { headers })
      .catch(this.handleError);
  }
 

  uploadToStorage(url: string, fileName: string): Observable<HttpResponse>{
    console.log(url);
    console.log(fileName);
    const headers = this.getHeaders();
    var data ={
      "fileName": fileName,
      "sourceurl": url
    };
    return this._httpClient.post<HttpResponse>(environment.apiUrl + "storage", data, {headers})
    .catch(this.handleError);
  }

  







}
