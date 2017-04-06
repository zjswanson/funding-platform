import { Component, OnInit } from '@angular/core';
import { Charitable } from './../charitable.model';
import { Idea } from './../idea.model';
import { Project } from './../project.model';
import { FirebaseService } from './../firebase.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers: [FirebaseService]
})
export class NewComponent implements OnInit {
  projectType: string = 'project';

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {

  }

  addProject(name: string, target: number, shortInfo: string, longInfo: string, imageUrl: string) {
    console.log('component works!')
    let newProject = new Project(name, target, 0, 0, shortInfo, longInfo, imageUrl);
    this.firebase.addProject(newProject);
  }

  setType(type: string) {
    this.projectType = type;
  }
}
