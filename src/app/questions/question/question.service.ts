import { Injectable } from '@angular/core';

import data from '../model/data.json';
import { Question } from '../model/Question';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  questions: Question[] = data;

  index = 0;

  constructor() {}

  answer(): void {}

  jump(index: number): Question {
    if (index > this.questions.length || index < 0) {
      throw new Error(`Illegal Index {{index}}`);
    }

    return this.questions[index];
  }

  next(): Question {
    const max = this.questions.length - 1;
    this.index = ++this.index > max ? max : this.index;
    return this.questions[this.index];
  }

  prev(): Question {
    this.index = --this.index <= 0 ? 0 : this.index;
    return this.questions[this.index];
  }
}
