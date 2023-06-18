import { Component, OnInit } from '@angular/core';
import { EvalService } from '../evaluation.Service';
import { ActivatedRoute, Router } from '@angular/router';

export interface evaluationList {
  id: number;
  evaluationName: string;
  evaluationStartDate: string;
  evaluationEndTime: string;
  evaluationStatus: string;
  departmentName: string;
  departmentId: number;
}

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: []
})


export class EvaluationListComponent implements OnInit {

  evaluationListDataSource: evaluationList[];
  displayedColumns: string[] = ['EName', 'SDate', 'EDate', 'DepName', 'Status', 'AddEqua'];
  dataSource: any



  constructor(private evalService: EvalService, private router: Router) {
  }

  ngOnInit(): void {
    this.evalService.onGetAll().subscribe(
      result => {
        this.evaluationListDataSource = result;
        this.changeDepartmentName();
      }
    )
    console.log("init end");
  }

  changeDepartmentName() {
    for (let i = 0; i < this.evaluationListDataSource.length; i++) {
      switch (this.evaluationListDataSource[i].departmentId) {
        case 1:
          this.evaluationListDataSource[i].departmentName = "IT";
          break;
        case 2:
          this.evaluationListDataSource[i].departmentName = "HR";
          break;
        case 3:
          this.evaluationListDataSource[i].departmentName = "Finance";
          break

      }
    }
  }

  StartEval() {

  }


  addQuestion(evaluation: any) {
    this.router.navigate(['/evaluation/addQuestionToEval', evaluation.id])
  }
}
