import { Component, OnInit } from '@angular/core';
import { QuestionModel } from '../questionModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: []
})
export class EditQuestionComponent implements OnInit{

  questionVar: QuestionModel = {
    id: this.route.snapshot.params['id'],
    question: this.route.snapshot.params['question']
  };
  constructor(private quesService: QuestionService, private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    console.log(this.questionVar.question);
  }
  
  questionForm = new FormGroup({
    questionVal: new FormControl(this.questionVar.question, [Validators.required])
  });
  onSubmit(form: FormGroup) {
    this.questionVar.question = form.value.questionVal;
    this.quesService.onUpdateQuestion(this.questionVar)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.quesService.openSuccessToast('Question saved Successfully');
        },
        error: error => {
          console.log(error.error);
          this.quesService.openErrorsToast();
        }
      });
      this.router.navigate(['question/Queslist']);

  }

}
