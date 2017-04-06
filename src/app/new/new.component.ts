import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  projectType: string;

  constructor() { }

  ngOnInit() {
  }

  addEntry(name, target, image, short, long) {

  }

  setType(type: string) {
    this.projectType = type;
  }
}
