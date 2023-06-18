import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { questionRoutes } from './question.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { NgToastModule } from 'ng-angular-popup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';



@NgModule({
  declarations: [
    NewQuestionComponent,
    QuestionListComponent,
    EditQuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(questionRoutes),
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
export class QuestionModule { }
