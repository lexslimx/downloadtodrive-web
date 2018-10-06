import { Component, OnInit } from '@angular/core';
import { DownloadHistoryService } from '../download-history/download-history.service';
import { DownloadBarService } from './download-bar.service';
import { IYoutubeDownloadRequest } from './downloadLinksResponse';

@Component({
  selector: 'app-download-bar',
  templateUrl: './download-bar.component.html',
  styleUrls: ['./download-bar.component.css'],
  providers: [DownloadBarService]
})
export class DownloadBarComponent implements OnInit {

  constructor(private _downloadBarService: DownloadBarService) {

  }
  errorMessage: string = '';
  downloadResult: IYoutubeDownloadRequest =
    {
      "youtubeLink": "",
      "quality": "",
      "title": "",
      "userId": "",
      "owner": "",
      "isFreeDownloadComplete": null,
      "isPremiumDownloadComplete": null,
      "youtubeDirectVideoLinks": []
    };

  ngOnInit() {
  }
  downloadLink: string = '';

  download() {
    this._downloadBarService.getYoutubeLinks(this.downloadLink)
      .subscribe(
        result => {
          this.downloadResult = result;
        },
        error => {
          this.errorMessage = <any>error;
        }
      )
  }

}
