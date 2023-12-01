import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublisherHomePageComponent } from './publisher-home-page/publisher-home-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddComicComponent } from './publisher-home-page/add-comic/add-comic.component';
import { ListComicComponent } from './publisher-home-page/list-comic/list-comic.component';
import { ProfileComponent } from './publisher-home-page/profile/profile.component';
import { NotificationComponent } from './publisher-home-page/notification/notification.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'publisher', 
    component: PublisherHomePageComponent,
    children: [
      { path: 'add-comic', component: AddComicComponent},
      { path: 'list-comic', component: ListComicComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'notification', component: NotificationComponent},
    ]},
  { path: 'admin', component: AdminPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
