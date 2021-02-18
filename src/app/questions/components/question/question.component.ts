import { QuestionService } from './../../service/question.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Question } from '../../model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  question: Question = { number: 0, title: 'Frage', answers: [] };

  constructor(private service: QuestionService) {}

  ngOnInit(): void {
    this.subscription = this.service.$question.subscribe((question) => this.question = question);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onOk(): void {
    this.service.next();
  }

  onCancel(): void {
    this.service.prev();
  }

}
