import { Answer } from './Answer';

/**
 * Multiple Choise Question.
 */
export interface Question {
  /** Identifier of this Question */
  number: number;

  /** Question Title. */
  title: string;

  /** Question Text. Aka the question. */
  text?: string;

  /** Question Image. */
  image?: string;

  /** Selection of possible answers */
  answers: Answer[];
}
