import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './header/register/register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PublisherHomePageComponent } from './publisher-home-page/publisher-home-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddComicComponent } from './publisher-home-page/add-comic/add-comic.component';
import { NotificationComponent } from './publisher-home-page/notification/notification.component';
import { ListComicComponent } from './publisher-home-page/list-comic/list-comic.component';
import { PanelComponent } from './publisher-home-page/panel/panel.component';
import { ProfileComponent } from './publisher-home-page/profile/profile.component';
import { PublisherHeaderComponent } from './publisher-home-page/publisher-header/publisher-header.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { LatestChapsComponent } from './home-page/latest-chaps/latest-chaps.component';
import { SearchBoxComponent } from './header/search-box/search-box.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftBarComponent,
    RightBarComponent,
    LoginComponent,
    RegisterComponent,
    AdminPageComponent,
    PublisherHomePageComponent,
    HomePageComponent,
    AddComicComponent,
    ListComicComponent,
    NotificationComponent,
    PanelComponent,
    ProfileComponent,
    PublisherHeaderComponent,
    LatestChapsComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
