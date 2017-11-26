import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthProvider } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

// routing
import { AppRoutingModule }  from './app.routing';

// database
import { DataService } from './services/data.service';

// component
import { HeaderComponent } from './header/header.component';
import { asidemenuComponent } from './aside-menu/aside-menu.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    asidemenuComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB8LCtvQkQ6W4PCouTqMctPTELT1ATgGTs",
      authDomain: "gianty-cms.firebaseapp.com",
      databaseURL: "https://gianty-cms.firebaseio.com",
      projectId: "gianty-cms",
      storageBucket: "gianty-cms.appspot.com",
      messagingSenderId: "1075282097542"
    })
  ],
  providers: [
    AngularFireAuthProvider,
    DataService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(router: Router) {
  //   //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
