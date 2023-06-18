import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { MangerEvaluations } from '../../evaluation/ViewModel/MangerEvaluations';
import { EmployeeEvaluations } from '../../evaluation/ViewModel/EmployeeEvaluations';

@Component({
  selector: 'app-manager-evaluation-list',
  templateUrl: './manager-evaluation-list.component.html',
  styleUrls: []
})
export class ManagerEvaluationListComponent {
  constructor(private route: ActivatedRoute,
    private router: Router,
    private empService: EmployeeService) { }

  displayedColumns: string[] = ['EName', 'SDate', 'EDate', 'Status', 'AddEqua'];

  employeeId: number = this.route.snapshot.params['id'];
  employeeEvaluationArray: MangerEvaluations;
  dataSource: EmployeeEvaluations[];
  errorMessage: string = "";

  ngOnInit(): void {
    this.empService.getAllEvaluationForManger(this.employeeId)
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
