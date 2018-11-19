import { Component, OnInit } from '@angular/core';
import { DownloadHistoryService } from '../download-history/download-history.service';
import { DownloadBarService } from './download-bar.service';
import { IYoutubeDownloadRequest } from './downloadLinksResponse';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-download-bar',
  templateUrl: './download-bar.component.html',
  styleUrls: ['./download-bar.component.css'],
  providers: [DownloadBarService]
})
export class DownloadBarComponent implements OnInit {

  constructor(private _downloadBarService: DownloadBarService) {

  }
  errorMessage = '';
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

}
