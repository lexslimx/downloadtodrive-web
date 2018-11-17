import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoPayerComponent } from '../video-payer/video-payer.component';
import { DownloadHistoryService } from '../download-history/download-history.service';

//this is a comment to trigger a new release

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

  ngOnInit() {
    this.fileName = this._fileName;
    this.url = this._url;
    this.size = this._size;
  }

  fileName: string = '';
  url: string = '';
  size: number = 0;

  openPlayer(content, videoUrl: string) {
    this.modalService.open(content, { size: 'lg' });
  }

  delete(fileName: string) {
    this._downloadHistoryService.deleteFile(fileName).subscribe(
      results => {
        console.log("success deleted");
      },
      error => {
        console.log("error deleting");
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
}
