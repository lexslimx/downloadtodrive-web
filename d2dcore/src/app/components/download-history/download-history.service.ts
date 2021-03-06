import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IBlobFile } from './blobFile';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth/auth.service';
import { IJoke } from './IJoke';


@Injectable({
  providedIn: 'root'
})
export class DownloadHistoryService {

  constructor(private _httpClient: HttpClient, private modalService: NgbModal, private _authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' +  this._authService.getToken().token
    });
    return headers;
  }

  private handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }

  getFilesInStorage(): Observable<IBlobFile[]> {
    const headers = this.getHeaders();
    return this._httpClient.get<IBlobFile[]>(environment.apiUrl + 'Storage', { headers })
      .catch(this.handleError);
  }

  getMotd(): Observable<IJoke> {
    return this._httpClient.get<IJoke>("https://api.icndb.com/jokes/random?limitTo=[nerdy]")
      .catch(this.handleError);
  }

  deleteFile(fileName: string) {
    const headers = this.getHeaders();
    return this._httpClient.request('delete', environment.apiUrl + 'Storage?fileName=' + fileName, { headers})
      .catch(this.handleError);
  }
  openPlayer(videoUrl: string) {
    this.modalService.open(videoUrl, { size: 'lg' });
  }
}
