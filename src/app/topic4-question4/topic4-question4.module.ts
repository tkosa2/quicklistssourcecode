import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Topic4Question4Page } from './topic4-question4.page';

const routes: Routes = [
  {
    path: '',
    component: Topic4Question4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Topic4Question4Page]
})
export class Topic4Question4PageModule {}
