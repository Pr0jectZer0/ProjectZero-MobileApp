import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FriendlistPage } from "../friendlist/friendlist";
import { ChatroomPage } from '../chatroom/chatroom';
import { NotesPage } from '../notes/notes';
import { NotificationsPage } from '../notifications/notifications';
/**
 * Generated class for the WillkommenPage page
 hi

 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-willkommen',
  templateUrl: 'willkommen.html',
})
export class WillkommenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WillkommenPage');
  }

  friendlist(){
      const authService = this.navParams.get('auth');
    this.navCtrl.push(FriendlistPage,{'token' : authService.getToken()});
  }

  chatroom(){
    const authService = this.navParams.get('auth');
  this.navCtrl.push(ChatroomPage,{'token' : authService.getToken()});
  }

  notes(){
    const authService = this.navParams.get('auth');
  this.navCtrl.push(NotesPage,{'token' : authService.getToken()});
  }

  notifications(){
    const authService = this.navParams.get('auth');
  this.navCtrl.push(NotificationsPage,{'token' : authService.getToken()});
  }

  logout(){
    const authService = this.navParams.get('auth');
    authService.signOut();
    this.navCtrl.popToRoot();

  }

}
