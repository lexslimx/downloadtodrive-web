import { Component, OnInit } from '@angular/core';
import { DownloadHistoryService } from './download-history.service';
import { IBlobFile } from './blobFile';

@Component({
    selector: 'app-download-history',
    templateUrl: './download-history.component.html',
    styleUrls: ['./download-history.component.css']
})
export class DownloadHistoryComponent implements OnInit {

    constructor(private _downloadHistoryService: DownloadHistoryService) { }

    ngOnInit() {
        this.getFilesInStorage();
    }

    filesInStorage: IBlobFile[];
    errorMessage: string;
    getFilesInStorage() {
        this._downloadHistoryService.getFilesInStorage("Guest").subscribe(
            results => {
                this.filesInStorage = results;
                console.log(this.filesInStorage);
            },
            error => { this.errorMessage = error; }
        );
    }
}
