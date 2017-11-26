import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AngularFireAuth
  ){

  }

  ngOnInit(){
    this.auth.auth.onAuthStateChanged((user) =>{
       if(!user){
         this.router.navigateByUrl('/login')
       }
     })
  }
}
