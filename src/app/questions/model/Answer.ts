/**
 * Answer Object.
 */
export interface Answer {

    /** Answer text. */
    text: string;

    /** Resource location to an image. */
    image?: string;

    /**  Indicates if this answer is correct. */
    isCorrect: boolean;
}
