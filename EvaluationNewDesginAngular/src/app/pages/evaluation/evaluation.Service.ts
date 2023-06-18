import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EvaluationModel } from './ViewModel/EvaluationModel';
import { QuestionForEvaluationModel } from './ViewModel/QuestionForEvaluationModel';
import { NgToastService } from 'ng-angular-popup';
import { AddedQuestionEvaluationModel } from './ViewModel/AddedQuestionEvaluationModel';

@Injectable({
  providedIn: 'root'
})
export class EvalService {

  constructor(private http: HttpClient, private toast: NgToastService) { }


  onCreatePost(evaluation: EvaluationModel) {
    let data = this.http
      .post<any>(
        'https://localhost:7199/api/Evaluation/CreateEvaluation',
        evaluation
      )
    return data;
  }

  onGetAll() {
    let arr = this.http.get<any>('https://localhost:7199/api/Evaluation/GetAllEvaluation');
    return arr;
  }

  onGetAllQuestionForEvaluation(id: number) {

    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', id);
    let evaluationQuestionArray = this.http.get<any>('https://localhost:7199/api/Evaluation/GetAllQuestionForEvaluation',
      {
        params: queryParams
      }
    );
    return evaluationQuestionArray;
  }


  AddQuestionToEvaluationPost(evaluation: AddedQuestionEvaluationModel[]) {
    let data = this.http
      .post<any>(
        'https://localhost:7199/api/Evaluation/AddQuestionToEvaluation',
        evaluation
      )
      return data;
  }

  DeleteQuestionsFormEvaluation(id: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', id);


    this.http
      .delete(
        'https://localhost:7199/api/Evaluation/DeleteQuestionFormEvaluation',
        {
          params: queryParams
        }
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: error => {
          console.log(error.error);

        }
      });
  }

  openSuccessToast(message: string){
    this.toast.success({detail: 'successfull', summary: message, duration: 3000});
  }

  openErrorsToast(){
    this.toast.error({detail: 'Error', summary: 'some thing went wrong', duration: 3000});
  }

}
