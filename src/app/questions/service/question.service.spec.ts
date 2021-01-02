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
    service.$question.subscribe((q) => {
      expect(q).toBeTruthy();
    });

    service.next();
  });

  it('should return an error', () => {
    expect(() => service.jump(-1)).toThrow();
  });

  it('should increment index', () => {
    service.next();
    expect(service.index).toBe(1);
  });

  it('should decrement index', () => {
    service.next();
    service.prev();
    expect(service.index).toBe(0);
  });

  it('should not decrement index below 0', () => {
    service.prev();
    expect(service.index).toBe(0);
  });

  it('should not increment index above dataset length', () => {
    const max = service.questions.length - 1;

    for (let i = 0; i < service.questions.length + 1; i++)
    {
      service.next();
    }

    expect(service.index).toBe(max);
  });
});
