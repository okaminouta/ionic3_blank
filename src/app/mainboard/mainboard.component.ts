import {Component} from '@angular/core';
import {InfoPage} from "../../pages/info/info";
import {ProfilePage} from "../../pages/profile/profile";
import {FriendsPage} from "../../pages/friends/friends";
import {HomePage} from "../../pages/home/home";

// import {FriendListComponent} from "../friend-list/friend-list.component";


// import {InfoComponent} from "../info/info.component";

@Component({
    selector: 'page-mainboard',
    templateUrl: 'mainboard.component.html'
})
export class MainboardComponent {

  tab1Root = HomePage;
  tab2Root = FriendsPage;
  tab3Root = ProfilePage;
  tab4Root = InfoPage;


    constructor() {

    }
}
