import { Routes } from '@angular/router';
import { EmployeeEvaluationComponent } from './employee-evaluation/employee-evaluation.component';
import { EmployeeEvaluationAnswerComponent } from './employee-evaluation-answer/employee-evaluation-answer.component';
import { ManagerEvaluationAnswerComponent } from './manager-evaluation-answer/manager-evaluation-answer.component';
import { ManagerEvaluationListComponent } from './manager-evaluation-list/manager-evaluation-list.component';



export const employeeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'empeval/:id',
        component: EmployeeEvaluationComponent
      },
      {
        path: 'empevalans/:evalId/:id',
        component: EmployeeEvaluationAnswerComponent
      },
      {
        path: 'mangeval/:id',
        component: ManagerEvaluationListComponent
      },
      {
        path: 'mangevalans',
        component: ManagerEvaluationAnswerComponent
      }
    ]
  },

];
