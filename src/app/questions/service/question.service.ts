import { Question } from './../model/Question';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import data from '../model/data.json';

/**
 * Question Service.
 * Provides a set of Questions and the posibility to navigate between them.
 */
@Injectable({ providedIn: 'root' })
export class QuestionService {
  /** Question data. */
  private questionDatabase: Question[] = data;
  /** Current index. */
  private currentIndex = 0;
  /** Subject to subscribe to.  */
  readonly $Question = new BehaviorSubject<Question>(data[0]);

  /**
   * Returns the current index.
   */
  public get index(): number {
    return this.currentIndex;
  }

  /**
   * Returns the current set of questions.
   */
  public get questions(): Question[] {
    return this.questionDatabase;
  }

  /**
   * Displays an question based on its index. If the index is invalid an Error is thrown.
   * @param index the index of the question to display.
   * @throws Error if index is invalid.
   */
  jump(index: number): void {
    if (index > this.questionDatabase.length - 1 || index < 0) {
      throw new Error(`Illegal Index ${index}`);
    }

    this.$Question.next(this.questionDatabase[index]);
  }

  /**
   * Get to the next question. If there is no next Question, display the last one.
   */
  next(): void {
    const max = this.questionDatabase.length - 1;
    this.currentIndex = ++this.currentIndex > max ? max : this.currentIndex;
    this.jump(this.currentIndex);
  }

  /**
   * Get to the previous question. If there is no previous Question, displays the first question.
   */
  prev(): void {
    this.currentIndex = --this.currentIndex <= 0 ? 0 : this.currentIndex;
    this.jump(this.currentIndex);
  }
}
