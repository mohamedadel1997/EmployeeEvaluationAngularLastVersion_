import { Routes } from '@angular/router';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';


export const questionRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'newQues',
        component: NewQuestionComponent
      },
      {
        path: 'Queslist',
        component: QuestionListComponent
      },
      {
        path: 'editques',
        component: EditQuestionComponent
      }
    ]
  },

];
