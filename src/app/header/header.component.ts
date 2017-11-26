import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as $ from 'jquery';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(
    private auth: AngularFireAuth
  ){

  }

  ngOnInit(){
      $('.navbar-toggle').on('click', function() {
          var $body = $(this).parents('body');
          $body.find('#wrapper').toggleClass('visible');
          $body.find('aside').toggleClass('visible');
      });

      $('.drop_down--menu').on('click', function() {
        $(this).toggleClass('active');
        $(this).parents('li').find('.subMenu').toggleClass('show');
      })
  }
  
  logOutFunc(){
    return this.auth.auth.signOut();
  }
}
