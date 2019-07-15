import { Component, OnInit } from '@angular/core';
import { DownloadHistoryService } from '../download-history/download-history.service';
import { DownloadBarService } from './download-bar.service';
import { IYoutubeDownloadRequest } from './downloadLinksResponse';
import { AuthService } from '../auth/auth.service';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { environment } from '../../../environments/environment';
declare let alertify: any;

@Component({
  selector: 'app-download-bar',
  templateUrl: './download-bar.component.html',
  styleUrls: ['./download-bar.component.css'],
  providers: [DownloadBarService]
})
export class DownloadBarComponent implements OnInit {

  constructor(private _downloadBarService: DownloadBarService) {
  }
  private hubConnection: HubConnection;
  errorMessage = '';
  downloadInProgress = false;
  progressCounter = 50;
  downloadResult: IYoutubeDownloadRequest;    
  downloadLink = '';

  ngOnInit() {
    this.hubConnection = new HubConnectionBuilder().withUrl(environment.signalRServer).build();
    this.hubConnection.on('ReceiveMessage', function (user, message) {
      alertify.dismissAll();
      alertify.notify(<any>message, 'success', 20, function() { });
      this.progressCounter = this.progressCounter + 1;
    });

    //this.hubConnection.start().catch(function (err) {
    //  return console.error(err.toString());
    //});
  }

  download() {
    this.downloadInProgress = true;
    this._downloadBarService.getYoutubeLinks(this.downloadLink)
      .subscribe(
        result => {
          this.downloadResult = result;
          this.downloadInProgress = false;
        },
        error => {
          this.errorMessage = <any>error;
          this.downloadInProgress = false;
        }
      );
  }
  
  UploadToStorage(video:IYoutubeDownloadRequest){     
    this._downloadBarService.uploadToStorage(video.uri, video.title + video.fileExtension).subscribe(
      success=>{ console.log(success)},  
       error=>{ console.log( error)});
  }

  public sendMessage(): void {
    this.hubConnection
      .invoke('SendMessage', 'user - client', 'client Message')
      .catch(err => console.error(err));
  }
}
