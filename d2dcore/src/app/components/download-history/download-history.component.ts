import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DownloadHistoryService } from './download-history.service';
import { IBlobFile } from './blobFile';
import { ChangeDetectorRef } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { VideoPayerComponent } from '../video-payer/video-payer.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-download-history',
    templateUrl: './download-history.component.html',
    styleUrls: ['./download-history.component.css']
})
export class DownloadHistoryComponent implements OnInit {

    alive = false;
    loading = false;
    filesInStorage: IBlobFile[] = [];
    errorMessage = '';
    constructor(private _downloadHistoryService: DownloadHistoryService,
        private ref: ChangeDetectorRef) {
        this.alive = true;
    }
    ngOnInit() {
        this.getFilesInStorage();
        IntervalObservable.create(10000)
            .takeWhile(() => this.alive)
            .subscribe(() => {
                this.getFilesInStorage();
            });
    }

    getFilesInStorage() {
        this.loading = true;
        this._downloadHistoryService.getFilesInStorage("Guest").subscribe(
            results => {
                this.filesInStorage = results;
                this.ref.markForCheck();
                this.loading = false;
            },
            error => {
                this.errorMessage = error;
                this.loading = false;
            }
        );
    }
}
