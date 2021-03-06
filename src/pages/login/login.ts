
import {Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AuthService } from '../auth.service';

import { WillkommenPage } from '../willkommen/willkommen';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{
  error: string;

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private toastCtrl: ToastController) {
  }

  ngOnInit() {
    this.authService.error.subscribe((err: string) => {
      this.error = err;
      console.log("Error: ", this.error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signInUser() {
    const email = this.user.value;
    const password =this.password.value;
    this.authService.signinUser(email, password);//test login: ("testb@b.de", "12345678")

    if(this.authService.isAuthenticated()){
      this.toast("Signing in");
        this.navCtrl.push(WillkommenPage,{'auth' : this.authService, 'token': this.authService.getToken()});
    }else{
      this.toast("Log in Failed");
    }

  }

  toast(msg: any) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bot'
  });
  toast.present();
}

}
