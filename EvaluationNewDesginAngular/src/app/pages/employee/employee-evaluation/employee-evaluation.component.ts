import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeEvaluations } from '../../evaluation/ViewModel/EmployeeEvaluations';
import { EvaluationModel } from '../../evaluation/ViewModel/EvaluationModel';

@Component({
  selector: 'app-employee-evaluation',
  templateUrl: './employee-evaluation.component.html',
  styleUrls: []
})
export class EmployeeEvaluationComponent {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private empService: EmployeeService) { }

  displayedColumns: string[] = ['EName', 'SDate', 'EDate', 'Status', 'AddEqua'];

  employeeId: number = this.route.snapshot.params['id'];
  employeeEvaluationArray: EmployeeEvaluations;
  dataSource: EvaluationModel[];
  errorMessage: string = "";

  ngOnInit(): void {
    this.empService.getAllEvaluationForEmployee(this.employeeId)
      .subscribe({
        next: (result) => {
          this.employeeEvaluationArray = result;
          this.dataSource = this.employeeEvaluationArray.evaluationModels;
          console.log(this.employeeEvaluationArray);
        }, error: error => {
          console.log(error.error);
          this.errorMessage = error.error;
        }
      })
  }

  startEval(EvalId: number) {
    this.router.navigate(['/employee/empevalans', EvalId, this.employeeId])
  }
  close(errorMessage: string) {
    errorMessage === '';
  }
}
