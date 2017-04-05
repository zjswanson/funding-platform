import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../firebase.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  providers: [FirebaseService]
})
export class ListPageComponent implements OnInit {
  display: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private firebase: FirebaseService) { }

  ngOnInit() {
    if (this.currentRoute === '/projects') {
      this.display = this.firebase.getProjects();
    } else if (this.currentRoute === '/charitables'  ) {
      this.display = this.firebase.getCharitables();
    } else if (this.currentRoute === '/ideas') {
      this.display = this.firebase.getIdeas();
    }
  }

  goToDetailPage(entry) {
   this.router.navigate(['detail', entry.$key]);
  } 



}
