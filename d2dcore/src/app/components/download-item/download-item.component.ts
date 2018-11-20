import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoPayerComponent } from '../video-payer/video-payer.component';
import { DownloadHistoryService } from '../download-history/download-history.service';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-download-item',
  templateUrl: './download-item.component.html',
  styleUrls: ['./download-item.component.css'],
  entryComponents: [VideoPayerComponent]
})
export class DownloadItemComponent implements OnInit {
  @Input() _fileName: string;
  @Input() _url: string;
  @Input() _size: number;
  constructor(private modalService: NgbModal, private _downloadHistoryService: DownloadHistoryService) { }

  fileName = '';
  url = '';
  size = 0;
  private hubConnection: HubConnection;

  ngOnInit() {
    this.fileName = this._fileName;
    this.url = this._url;
    this.size = this._size;

    this.hubConnection = new HubConnectionBuilder().withUrl(environment.signalRServer).build();
    this.hubConnection.on('ReceiveMessage', function (user, message) {
      console.log(<any>message);
    });

    this.hubConnection.start().catch(function (err) {
      return console.error(err.toString());
    });
  }

  openPlayer(content, videoUrl: string) {
    this.modalService.open(content, { size: 'lg' });
  }

  delete(fileName: string) {
    this._downloadHistoryService.deleteFile(fileName).subscribe(
      results => {
        console.log('success deleted');
      },
      error => {
        console.log('error deleting');
      }
    );
  }

  open(videoUrl: string) {
    const modalRef = this.modalService.open(VideoPayerComponent,
      { centered: true, size: 'lg', windowClass: 'dark-modal' })
      .componentInstance;
    modalRef.videoUrl = videoUrl;
    modalRef.name = 'player';
  }

  public sendMessage(): void {
    this.hubConnection
      .invoke('SendMessage', 'user - client', 'client Message')
      .catch(err => console.error(err));
  }

}
