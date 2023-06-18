import { Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionModel } from '../questionModel';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: []
})
export class NewQuestionComponent {
  questionVar: QuestionModel = {};

  constructor(private quesService: QuestionService) { }

  questionForm = new FormGroup({
    questionVal: new FormControl('', [Validators.required])
  });



  onSubmit(form: FormGroup) {

    this.questionVar.question = form.value.questionVal;
    this.quesService.onCreatePost(this.questionVar)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.quesService.openSuccessToast('action saved Successfully');
        },
        error: error => {
          console.log(error.error);
          this.quesService.openErrorsToast();
        }
      });
    form.reset();
  }
}
