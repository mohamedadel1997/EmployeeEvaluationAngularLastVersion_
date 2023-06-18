import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EvaluationModel } from '../ViewModel/EvaluationModel';
import { EvalService } from '../evaluation.Service';
import { Router } from '@angular/router';


interface department {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-new-evaluation',
  templateUrl: './new-evaluation.component.html',
  styleUrls: []
})
export class NewEvaluationComponent {

  constructor(private evalService: EvalService,
    private router: Router) { }
  evaluation: EvaluationModel = {};

  DepartmentArray: department[] = [
    { value: '1', viewValue: 'IT' },
    { value: '2', viewValue: 'HR' },
    { value: '3', viewValue: 'Finance' },
  ];

  evaluationForm = new FormGroup({
    evalName: new FormControl('', [Validators.required]),
    evalStartDate: new FormControl(new Date().getDate, [Validators.required]),
    evalEndDate: new FormControl(new Date().getDate, [Validators.required]),
    evalDepId: new FormControl('', [Validators.required]),
  });


  submitForm(form: FormGroup) {
    this.evaluation.evaluationName = form.value.evalName;
    this.evaluation.evaluationStartDate = form.value.evalStartDate;;
    this.evaluation.evaluationEndTime = form.value.evalEndDate;
    this.evaluation.departmentId = form.value.evalDepId;
    this.evaluation.evaluationStatus = '';
    this.evalService.onCreatePost(this.evaluation).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/evaluationList/addQuestionToEval', data.id])
      },
      error: error => {
        console.log(error.error);
      }
    });
  }
}
