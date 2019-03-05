import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Topic3Question3Page } from './topic3-question3.page';

const routes: Routes = [
  {
    path: '',
    component: Topic3Question3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Topic3Question3Page]
})
export class Topic3Question3PageModule {}
