import { QuestionService } from './../../service/question.service';
import { Question } from '../../model/Question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  question: Question = { title: '', number: 0, answers:[] };

  constructor(private service: QuestionService) {}

  ngOnInit(): void {}
}
