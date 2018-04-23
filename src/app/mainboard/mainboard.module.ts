import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule} from 'ionic-angular';

import {HttpClientModule} from "@angular/common/http";
import {MainboardComponent} from "./mainboard.component";

import {InfoPage} from "../../pages/info/info";
import {ProfilePage} from "../../pages/profile/profile";
import {FriendsPage} from "../../pages/friends/friends";
import {HomePage} from "../../pages/home/home";

import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';


@NgModule({
  declarations: [
    MainboardComponent,
    HomePage,
    FriendsPage,
    ProfilePage,
    InfoPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MainboardComponent),
    LoadingBarHttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MainboardComponent,
    HomePage,
    FriendsPage,
    ProfilePage,
    InfoPage,
  ],
  providers: [
  ]
})
export class MainboardModule {
}
