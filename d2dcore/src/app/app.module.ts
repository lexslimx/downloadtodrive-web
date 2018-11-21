import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DownloadBarComponent } from './components/download-bar/download-bar.component';
import { DownloadHistoryComponent } from './components/download-history/download-history.component';
import { VideoPayerComponent } from './components/video-payer/video-payer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DownloadItemComponent } from './components/download-item/download-item.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TopnavigationComponent } from './components/nav/topnavigation/topnavigation.component';
import { AuthService } from './components/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DownloadBarComponent,
    DownloadHistoryComponent,
    VideoPayerComponent,
    DownloadItemComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TopnavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '*', redirectTo: 'home', pathMatch: 'full' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
      ], { useHash: true }),
    FormsModule,
    NgbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [VideoPayerComponent]
})
export class AppModule { }
