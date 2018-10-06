import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IBlobFile } from './blobFile';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class DownloadHistoryService {

  constructor(private _httpClient: HttpClient,private modalService: NgbModal) { }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',      
    });
    return headers;
  }

  private handleError(err: HttpErrorResponse) {    
    return Observable.throw(err.message);
  }

  getFilesInStorage(downloadLink: string): Observable<IBlobFile[]> {
    let headers = this.getHeaders();    
    return this._httpClient.get<IBlobFile[]>(environment.apiUrl + 'StorageApi?url=' + downloadLink, { headers })
      .catch(this.handleError);
  }

  openPlayer(videoUrl :string) {    
    this.modalService.open(videoUrl, { size: 'lg' });
  }

}
