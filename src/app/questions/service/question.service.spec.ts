import { QuestionService } from './question.service';
import { TestBed } from '@angular/core/testing';

describe('QuestionService', () => {
  let service: QuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a question', () => {
    const question = service.next();
    expect(question).toBeTruthy();
  });

  it('should return an error', () => {
    expect(() => service.jump(-1)).toThrow();
  });

  it('should increment index', () => {
    service.index = 1;
    service.next();
    expect(service.index).toBe(2);
  });

  it('should decrement index', () => {
    service.index = 2;
    service.prev();
    expect(service.index).toBe(1);
  });

  it('should not decrement index below 0', () => {
    service.index = 0;
    service.prev();
    expect(service.index).toBe(0);
  });

  it('should not increment index above dataset length', () => {
    const max = service.questions.length - 1;
    service.index = max;
    service.next();
    expect(service.index).toBe(max);
  });
});
