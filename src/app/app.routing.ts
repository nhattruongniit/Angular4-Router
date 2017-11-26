
import { NgModule, }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { EmployeeComponent } from './employee/employee.component';


const appRoutes: Routes = [  
  { path: '', component: HomeComponent}, 
  //{ path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,  { useHash: false })
  ],
  exports: [
    RouterModule
  ]
})
//export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
export class AppRoutingModule { }