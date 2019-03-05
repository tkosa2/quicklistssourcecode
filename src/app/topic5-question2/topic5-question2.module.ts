import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Topic5Question2Page } from './topic5-question2.page';

const routes: Routes = [
  {
    path: '',
    component: Topic5Question2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Topic5Question2Page]
})
export class Topic5Question2PageModule {}
