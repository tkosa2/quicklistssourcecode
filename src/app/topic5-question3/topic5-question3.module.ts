import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Topic5Question3Page } from './topic5-question3.page';

const routes: Routes = [
  {
    path: '',
    component: Topic5Question3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Topic5Question3Page]
})
export class Topic5Question3PageModule {}
