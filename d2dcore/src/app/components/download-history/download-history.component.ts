import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DownloadHistoryService } from './download-history.service';
import { IBlobFile } from './blobFile';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-download-history',
    templateUrl: './download-history.component.html',
    styleUrls: ['./download-history.component.css']
})
export class DownloadHistoryComponent implements OnInit {

    constructor(private _downloadHistoryService: DownloadHistoryService, private ref: ChangeDetectorRef) { }

    ngOnInit() {
        this.getFilesInStorage();
    }

    filesInStorage: IBlobFile[] = [];
    errorMessage: string = '';
    getFilesInStorage() {
        this._downloadHistoryService.getFilesInStorage("Guest").subscribe(
            results => {
                this.filesInStorage = results;
                this.ref.markForCheck();
            },
            error => { this.errorMessage = error; }
        );
    }
}
