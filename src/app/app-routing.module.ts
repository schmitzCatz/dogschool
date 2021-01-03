import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './information/components/information/information.component';
import { QuestionComponent } from './questions/components/question/question.component';

const routes: Routes = [
  {
    path: 'information',
    component: InformationComponent,
  },
  {
    path: 'questions',
    component: QuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
