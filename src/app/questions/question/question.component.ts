import { QuestionService } from './question.service';
import { Question } from './../model/Question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  question: Question;

  constructor(private service: QuestionService) {
    this.question = this.service.next();
  }

  ngOnInit(): void {}
}
