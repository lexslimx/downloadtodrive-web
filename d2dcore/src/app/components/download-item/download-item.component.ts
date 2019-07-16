import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoPayerComponent } from '../video-payer/video-payer.component';
import { DownloadHistoryService } from '../download-history/download-history.service';
import { staticNever } from 'rxjs-compat/add/observable/never';

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

  ngOnInit() {
    this.fileName = this._fileName;
    this.url = this._url;
    this.size = this._size;
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
      { centered: true, size: 'lg', windowClass: 'dark-modal', keyboard: false, backdrop: "static" })
      .componentInstance;
      modalRef.videoUrl = videoUrl;
      modalRef.videoTitle = this.fileName;
      modalRef.name = 'player';
  }
}
