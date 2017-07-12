import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Project, User} from "../../interface/user";

/**
 * Generated class for the ProjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  user:User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user=this.navParams.data;

  }

  ionViewDidLoad() {

  }

  deleteProject(project:Project){
   this.user.projects.splice(this.user.projects.indexOf(project),1);
  }

}
