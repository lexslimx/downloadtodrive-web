import { Component, OnInit } from '@angular/core';
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
 
  errorMessage = '';
  downloadInProgress = false;
  progressCounter = 50;
  downloadResult: IYoutubeDownloadRequest;    
  downloadLink = '';

  ngOnInit() {
    
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
          this.errorMessage = "sorry, we couldn't get this video: " + this.downloadLink;
          this.downloadInProgress = false;
        }
      );
  }
  closeErrorMessage(){
    this.errorMessage = null;
  }
  
  UploadToStorage(video:IYoutubeDownloadRequest){     
    this._downloadBarService.uploadToStorage(video.uri, video.title + video.fileExtension).subscribe(
      success=>{ console.log(success)},  
       error=>{ console.log( error)});
  }
}
