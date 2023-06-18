import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEvaluationAnswerComponent } from './employee-evaluation-answer/employee-evaluation-answer.component';
import { EmployeeEvaluationComponent } from './employee-evaluation/employee-evaluation.component';
import { ManagerEvaluationAnswerComponent } from './manager-evaluation-answer/manager-evaluation-answer.component';
import { ManagerEvaluationListComponent } from './manager-evaluation-list/manager-evaluation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { NgToastModule } from 'ng-angular-popup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { employeeRoutes } from './employee.routing.module';



@NgModule({
  declarations: [
    EmployeeEvaluationAnswerComponent,
    EmployeeEvaluationComponent,
    ManagerEvaluationAnswerComponent,
    ManagerEvaluationListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRoutes),
    MaterialModule,
    FormsModule,
    NgToastModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    SharedModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule
  ]
})
export class EmployeeModule { }
