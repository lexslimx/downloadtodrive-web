import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DownloadHistoryService } from './download-history.service';
import { IBlobFile } from './blobFile';
import { ChangeDetectorRef } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { VideoPayerComponent } from '../video-payer/video-payer.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { environment } from '../../../environments/environment';
declare let alertify: any;

@Component({
  selector: 'app-download-history',
  templateUrl: './download-history.component.html',
  styleUrls: ['./download-history.component.css']
})
export class DownloadHistoryComponent implements OnInit {
  private hubConnection: HubConnection;
  loading = false;
  filesInStorage: IBlobFile[] = [];
  errorMessage = '';
  motd: string = '';

  constructor(private _downloadHistoryService: DownloadHistoryService) {
  }

  ngOnInit() {
    this.connectToSignalR();    
  }

  getFilesInStorage() {
    this._downloadHistoryService.getFilesInStorage().subscribe(
      results => {
        this.filesInStorage = results;
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  connectToSignalR() {
    var _self = this;
    this.hubConnection = new HubConnectionBuilder().withUrl(environment.signalRServer).build();
    this.hubConnection.on('broadcastMessage', function (message, user) {
      _self.getFilesInStorage();
      alertify.notify(<string>message, 'success', 10, function () {
      });
      _self.getMotd();
    });
    this.hubConnection.start()
      .catch(function (err) {
        return console.error(err.toString());
      });
  }  

  getMotd() {
    this._downloadHistoryService.getMotd().subscribe(
      results => {
        this.motd = results.value.joke;
      },
      error => {
        console.log('motd error' + <any>error);
      }
    );
  }
}
