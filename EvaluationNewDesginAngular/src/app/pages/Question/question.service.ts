import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionModel } from '../evaluation/ViewModel/QuestionModel';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient, private toast: NgToastService) { }

  onCreatePost(question: QuestionModel) {
    let data = this.http
      .post<any>(
        'https://localhost:7199/api/Questions/CreateQuestion',
        question
      )
    return data;
  }


  onGetAll() {
    let arr = this.http.get<any>('https://localhost:7199/api/Questions/GetAllQuestion');
    return arr;
  }

  onUpdateQuestion(question: QuestionModel) {
    let result = this.http.put<any>(
      'https://localhost:7199/api/Questions/UpdateQuestion',
      question
    );
    return result;
  }

  openSuccessToast(message: string) {
    this.toast.success({ detail: 'successfull', summary: message, duration: 3000 });
  }

  openErrorsToast() {
    this.toast.error({ detail: 'Error', summary: 'some thing went wrong', duration: 3000 });
  }
}
