import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: ClientComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ClientComponent,
    HomeComponent
  ],
  bootstrap: [ClientComponent]
})
export class ClientModule { }
