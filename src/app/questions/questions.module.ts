import { AnswerComponent } from './components/answer/answer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [QuestionComponent, AnswerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    QuestionComponent
  ]
})
export class QuestionsModule { }
