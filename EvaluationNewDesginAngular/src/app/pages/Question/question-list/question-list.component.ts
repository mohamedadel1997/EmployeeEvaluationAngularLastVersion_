import { Component } from '@angular/core';
import { QuestionModel } from '../questionModel';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: []
})
export class QuestionListComponent {
  displayedColumns: string[] = ['Question', 'Edit'];

  questionListDataSource: QuestionModel[];

  constructor(private quesService: QuestionService, private router: Router) { }




ngOnInit(): void {
  this.quesService.onGetAll().subscribe( result =>{
    this.questionListDataSource = result;
    
  })
}

  EditQuestion(element: any){
    console.log(element)
    this.router.navigate(['question/editques', element])
  }
}
