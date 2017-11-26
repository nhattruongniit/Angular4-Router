import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as $ from 'jquery';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public employees: FirebaseListObservable<any[]>;

  constructor(
    private db: AngularFireDatabase
  ){
    this.employees = this.db.list('employee');
  }

  ngOnInit(){
  }
}
