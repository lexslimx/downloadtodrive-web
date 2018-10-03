import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadBarComponent } from './download-bar.component';

describe('DownloadBarComponent', () => {
  let component: DownloadBarComponent;
  let fixture: ComponentFixture<DownloadBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
