import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {
   model: any = {};

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginFunc(email: string, password: string){
    this.auth.auth.signInWithEmailAndPassword(email, password).then((email) =>{
      this.router.navigateByUrl("/home");
    }).catch((error) => {
      alert(error.message);
    })
  }


}
