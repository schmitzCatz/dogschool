import { Answer } from '../../model/answer';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
})
export class AnswerComponent implements OnInit {
  @Input()
  options!: Answer[];

  constructor() {}

  ngOnInit(): void {}

  get hasMultipleAnswers(): boolean {
    return this.numberOfCorrectAnswers > 1;
  }

  get numberOfCorrectAnswers(): number {
    return this.options.filter(opt => opt.isCorrect).length;
  }
}
