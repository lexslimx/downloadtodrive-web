import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPayerComponent } from './video-payer.component';

describe('VideoPayerComponent', () => {
  let component: VideoPayerComponent;
  let fixture: ComponentFixture<VideoPayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
