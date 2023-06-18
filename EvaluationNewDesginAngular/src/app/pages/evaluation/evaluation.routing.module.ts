import { Routes } from '@angular/router';
import { NewEvaluationComponent } from './new-evaluation/new-evaluation.component';
import { AddQuestionToEvaluationComponent } from './add-question-to-evaluation/add-question-to-evaluation.component';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';
import { EditEvaluationComponent } from './edit-evaluation/edit-evaluation.component';

export const evaluationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'evaluationList',
        component: EvaluationListComponent
      },
      {
        path: 'newevaluation',
        component: NewEvaluationComponent
      },
      {
        path: 'addQuestionToEval/:id',
        component: AddQuestionToEvaluationComponent
      },
      {
        path: 'editEvaluation/:id',
        component: EditEvaluationComponent
      }
    ]
  },

];
