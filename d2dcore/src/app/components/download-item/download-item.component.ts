import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoPayerComponent } from '../video-payer/video-payer.component';


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
  constructor(private modalService: NgbModal) { }

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

  open(videoUrl: string) {
    const modalRef = this.modalService.open(VideoPayerComponent,
      { centered: true, size: 'lg', windowClass: 'dark-modal' })
      .componentInstance;
    modalRef.videoUrl = videoUrl;
    modalRef.name = 'player';
  }
}
