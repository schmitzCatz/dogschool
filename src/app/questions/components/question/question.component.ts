import { Answer } from './../../model/Answer';
import { Question } from './../../model/Question';
import { QuestionService } from './../../service/question.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnDestroy {
  private subscription: Subscription = this.service.$question.subscribe(
    this.update
  );

  title = 'Question';

  text?: string;

  options: Answer[] = [];

  constructor(private service: QuestionService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void { }

  update(question: Question): void {
    console.log(question);
    this.title = question.title;
    this.text = question.text;
    this.options = question.answers;

    console.log(this.title);
  }
}
