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
  progressCounter = 50;
  downloadResult: IYoutubeDownloadRequest =
    {
      'youtubeLink': '',
      'quality': '',
      'title': '',
      'userId': '',
      'owner': '',
      'isFreeDownloadComplete': null,
      'isPremiumDownloadComplete': null,
      'youtubeDirectVideoLinks': []
    };
  downloadLink = '';
  downloadModeList: string[] = ['proxy', 'direct', 'file'];
  selectedDownloadMode = 'proxy';

  ngOnInit() {
    this.hubConnection = new HubConnectionBuilder().withUrl(environment.signalRServer).build();
    this.hubConnection.on('ReceiveMessage', function (user, message) {
      alertify.dismissAll();
      alertify.notify(<any>message, 'success', 10, function() { });
      this.progressCounter = this.progressCounter + 1;
    });

    this.hubConnection.start().catch(function (err) {
      return console.error(err.toString());
    });
  }

  download() {
    this._downloadBarService.getYoutubeLinks(this.downloadLink, this.selectedDownloadMode)
      .subscribe(
        result => {
          this.downloadResult = result;
        },
        error => {
          this.errorMessage = <any>error;
        }
      );
  }

  public sendMessage(): void {
    this.hubConnection
      .invoke('SendMessage', 'user - client', 'client Message')
      .catch(err => console.error(err));
  }
}
