import { Injectable } from '@angular/core';
import { Charitable } from './charitable.model';
import { Idea } from './idea.model';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class FirebaseService {
  punchStarters: FirebaseListObservable<any[]>;
  projects: FirebaseListObservable<any[]>;
  ideas: FirebaseListObservable<any[]>;
  charitables: FirebaseListObservable<any[]>;


  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
    this.ideas = angularFire.database.list('ideas');
    this.charitables = angularFire.database.list('charitables');
    this.punchStarters = angularFire.database.list('');
  }

  getProjects() {
    return this.projects;
  }

  getIdeas() {
    return this.ideas;
  }

  getCharitables() {
    return this.charitables;
  }

  getPunchStarters() {
    return this.punchStarters;
  }



}
