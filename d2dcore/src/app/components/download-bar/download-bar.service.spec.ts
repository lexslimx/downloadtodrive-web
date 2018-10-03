import { TestBed } from '@angular/core/testing';

import { DownloadBarService } from './download-bar.service';

describe('DownloadBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadBarService = TestBed.get(DownloadBarService);
    expect(service).toBeTruthy();
  });
});
