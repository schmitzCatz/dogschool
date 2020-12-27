import { Answer } from './../../model/Answer';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Input()
  options?: Answer[];

  constructor() {  }

  ngOnInit(): void {
  }

}
