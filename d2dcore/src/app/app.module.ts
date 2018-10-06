import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DownloadBarComponent } from './components/download-bar/download-bar.component';
import { DownloadHistoryComponent } from './components/download-history/download-history.component';
import { VideoPayerComponent } from './components/video-payer/video-payer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    SideBarComponent,
    DownloadBarComponent,
    DownloadHistoryComponent,
    VideoPayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[VideoPayerComponent]
})
export class AppModule { }
