import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  registerFunc(){
    this.router.navigate(['/login'])  
  }

}
