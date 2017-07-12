import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UsersProvider} from "../../providers/users/users";
import {User} from "../../interface/user";
import {ProjectsPage} from "../projects/projects";

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users:User[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public Users: UsersProvider) {

  }

  ionViewDidLoad(){

    this.Users.getUsers().subscribe(data => {
      this.users=data;
    });
  }
  userSelected(user:User){
    this.navCtrl.push(ProjectsPage,user);
  }

}
