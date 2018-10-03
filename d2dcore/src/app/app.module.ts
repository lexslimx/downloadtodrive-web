import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DownloadBarComponent } from './components/download-bar/download-bar.component';
import { DownloadHistoryComponent } from './components/download-history/download-history.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    SideBarComponent,
    DownloadBarComponent,
    DownloadHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
