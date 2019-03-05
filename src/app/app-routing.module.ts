import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/checklists', pathMatch: 'full' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'checklists', loadChildren: './home/home.module#HomePageModule' },
  { path: 'checklists/:id', loadChildren: './checklist/checklist.module#ChecklistPageModule' },
  { path: 'topic1', loadChildren: './topic1/topic1.module#Topic1PageModule' },
  { path: 'topic2', loadChildren: './topic2/topic2.module#Topic2PageModule' },
  { path: 'topic3', loadChildren: './topic3/topic3.module#Topic3PageModule' },
  { path: 'topic4', loadChildren: './topic4/topic4.module#Topic4PageModule' },
  { path: 'topic5', loadChildren: './topic5/topic5.module#Topic5PageModule' },
  { path: 'topic1question1', loadChildren: './topic1-question1/topic1-question1.module#Topic1Question1PageModule' },
  { path: 'topic1question2', loadChildren: './topic1-question2/topic1-question2.module#Topic1Question2PageModule' },
  { path: 'topic1question3', loadChildren: './topic1-question3/topic1-question3.module#Topic1Question3PageModule' },
  { path: 'topic1question4', loadChildren: './topic1-question4/topic1-question4.module#Topic1Question4PageModule' },
  { path: 'topic1question5', loadChildren: './topic1-question5/topic1-question5.module#Topic1Question5PageModule' },
  { path: 'topic2question1', loadChildren: './topic2-question1/topic2-question1.module#Topic2Question1PageModule' },
  { path: 'topic2question2', loadChildren: './topic2-question2/topic2-question2.module#Topic2Question2PageModule' },
  { path: 'topic2question3', loadChildren: './topic2-question3/topic2-question3.module#Topic2Question3PageModule' },
  { path: 'topic2question4', loadChildren: './topic2-question4/topic2-question4.module#Topic2Question4PageModule' },
  { path: 'topic2question5', loadChildren: './topic2-question5/topic2-question5.module#Topic2Question5PageModule' },
  { path: 'topic3question1', loadChildren: './topic3-question1/topic3-question1.module#Topic3Question1PageModule' },
  { path: 'topic3question2', loadChildren: './topic3-question2/topic3-question2.module#Topic3Question2PageModule' },
  { path: 'topic3question3', loadChildren: './topic3-question3/topic3-question3.module#Topic3Question3PageModule' },
  { path: 'topic3question4', loadChildren: './topic3-question4/topic3-question4.module#Topic3Question4PageModule' },
  { path: 'topic3question5', loadChildren: './topic3-question5/topic3-question5.module#Topic3Question5PageModule' },
  { path: 'topic4question1', loadChildren: './topic4-question1/topic4-question1.module#Topic4Question1PageModule' },
  { path: 'topic4question2', loadChildren: './topic4-question2/topic4-question2.module#Topic4Question2PageModule' },
  { path: 'topic4question3', loadChildren: './topic4-question3/topic4-question3.module#Topic4Question3PageModule' },
  { path: 'topic4question4', loadChildren: './topic4-question4/topic4-question4.module#Topic4Question4PageModule' },
  { path: 'topic4question5', loadChildren: './topic4-question5/topic4-question5.module#Topic4Question5PageModule' },
  { path: 'topic5question1', loadChildren: './topic5-question1/topic5-question1.module#Topic5Question1PageModule' },
  { path: 'topic5question2', loadChildren: './topic5-question2/topic5-question2.module#Topic5Question2PageModule' },
  { path: 'topic5question3', loadChildren: './topic5-question3/topic5-question3.module#Topic5Question3PageModule' },
  { path: 'topic5question4', loadChildren: './topic5-question4/topic5-question4.module#Topic5Question4PageModule' },
  { path: 'topic5question5', loadChildren: './topic5-question5/topic5-question5.module#Topic5Question5PageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}