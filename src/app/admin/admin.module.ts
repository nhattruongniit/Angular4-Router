import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LayoutComponent } from './containers/layout/layout.component';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent }
      // ...
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminComponent, LoginComponent, HomeComponent, LayoutComponent]
})
export class AdminModule { }
