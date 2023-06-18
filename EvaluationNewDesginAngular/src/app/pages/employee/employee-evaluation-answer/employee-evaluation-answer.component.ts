import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionForEvaluationModel } from '../../evaluation/ViewModel/QuestionForEvaluationModel';
import { EvalService } from '../../evaluation/evaluation.Service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-evaluation-answer',
  templateUrl: './employee-evaluation-answer.component.html',
  styleUrls: ['./employee-evaluation-answer.component.scss']
})
export class EmployeeEvaluationAnswerComponent {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private evalService: EvalService,
    private employeeService: EmployeeService) { }


  emplId: number = 0;
  evalId: number = 0;
  quesArrStr: QuestionForEvaluationModel[] = [];
  empAnswer: number[] = []
  empComment: string[] = [];


  ngOnInit(): void {
    this.evalId = this.route.snapshot.params['evalId'];
    this.emplId = this.route.snapshot.params['id'];

    console.log(this.empComment);

    this.evalService.onGetAllQuestionForEvaluation(this.evalId).subscribe(
      result => {
        console.log(result);
        this.quesArrStr = result
      }
    )
  }





  onSubmitResult() {
    var finalResult = [];
    console.log(this.empAnswer);
    console.log(this.quesArrStr);
    for (var i =0; i < this.quesArrStr.length; i++){
      var tmpAnswer = 0; 
      if (this.empAnswer[i] != undefined){
        tmpAnswer = this.empAnswer[i];
      }

      let tmpObject = { 
        employeeAnswer : tmpAnswer,
        employeeId : this.emplId,
        questionsEvaluationId : this.quesArrStr[i].id,
        comment : this.empComment[i]
       }
       finalResult[i] = tmpObject;
    }
    console.log("finalResult Array");
    console.log(finalResult);

    this.employeeService.postEmployeeAnswer(finalResult).subscribe( result =>{
      console.log(result);
    });
    
    this.router.navigate(['/employee/empeval',this.emplId]);
  }


  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }

}
