import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../firebase.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FirebaseService]
})
export class HomeComponent implements OnInit {
  punchStarters: FirebaseListObservable<any[]>;

  constructor(private router: Router, private firebase: FirebaseService) { }

  ngOnInit() {
    this.punchStarters = this.firebase.getPunchStarters();
  }

  goToDetailPage(entry) {
  //  this.router.navigate(['detail', entry.$key]);
  console.log(entry)
  }

}
