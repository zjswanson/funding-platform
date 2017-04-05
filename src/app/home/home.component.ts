import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../firebase.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FirebaseService]
})
export class HomeComponent implements OnInit {
  punchStarters: FirebaseListObservable<any[]>;
  projects: FirebaseListObservable<any[]>;
  ideas: FirebaseListObservable<any[]>;
  charitables: FirebaseListObservable<any[]>;

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
    this.punchStarters = this.firebase.getPunchStarters();
    this.projects = this.firebase.getProjects();
    this.ideas = this.firebase.getIdeas();
    this.charitables = this.firebase.getCharitables();
  }

}
