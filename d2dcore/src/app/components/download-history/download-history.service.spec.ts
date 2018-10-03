import { TestBed } from '@angular/core/testing';

import { DownloadHistoryService } from './download-history.service';

describe('DownloadHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadHistoryService = TestBed.get(DownloadHistoryService);
    expect(service).toBeTruthy();
  });
});
