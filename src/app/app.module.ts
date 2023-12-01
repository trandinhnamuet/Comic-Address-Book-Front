import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PublisherHomePageComponent } from './publisher-home-page/publisher-home-page.component';
import { PanelComponent } from './publisher-home-page/panel/panel.component';
import { PublisherHeaderComponent } from './publisher-home-page/publisher-header/publisher-header.component';
import { ListComicComponent } from './publisher-home-page/list-comic/list-comic.component';
import { AddComicComponent } from './publisher-home-page/add-comic/add-comic.component';
import { NotificationComponent } from './publisher-home-page/notification/notification.component';
import { ProfileComponent } from './publisher-home-page/profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftBarComponent,
    RightBarComponent,
    FooterComponent,
    HomePageComponent,
    AdminPageComponent,
    PublisherHomePageComponent,
    PanelComponent,
    PublisherHeaderComponent,
    ListComicComponent,
    AddComicComponent,
    NotificationComponent,
    ProfileComponent,
    // ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
