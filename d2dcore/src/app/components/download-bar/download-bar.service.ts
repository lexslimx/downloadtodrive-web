import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; 
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { environment } from '../../../environments/environment';
import { IYoutubeDownloadRequest } from './downloadLinksResponse';


@Injectable({
  providedIn: 'root'
})
export class DownloadBarService {

  constructor(private _httpClient: HttpClient) { }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',      
    });
    return headers;
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getYoutubeLinks(downloadLink: string): Observable<IYoutubeDownloadRequest> {
    let headers = this.getHeaders();
    console.log(headers);
    return this._httpClient.get<IYoutubeDownloadRequest>(environment.apiUrl + 'YouTubeApi?url=' + downloadLink, { headers })
      .catch(this.handleError);
  }







}