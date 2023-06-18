import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { evaluationRoutes } from './evaluation.routing.module';
import { NewEvaluationComponent } from './new-evaluation/new-evaluation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { MatNativeDateModule } from '@angular/material/core';
import { AddQuestionToEvaluationComponent } from './add-question-to-evaluation/add-question-to-evaluation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {NgToastModule} from 'ng-angular-popup';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';
import { EditEvaluationComponent } from './edit-evaluation/edit-evaluation.component';



@NgModule({
  declarations: [
    NewEvaluationComponent,
    EvaluationListComponent,
    AddQuestionToEvaluationComponent,
    EditEvaluationComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(evaluationRoutes),
    MaterialModule,
    FormsModule,
    NgToastModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    SharedModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule
  ],
  exports: [TablerIconsModule]
})
export class EvaluationModule { }
