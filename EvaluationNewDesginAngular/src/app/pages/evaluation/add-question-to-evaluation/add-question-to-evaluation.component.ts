import { Component, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionForEvaluationModel } from '../ViewModel/QuestionForEvaluationModel';
import { QuestionModel } from '../ViewModel/QuestionModel';
import { EvalService } from '../evaluation.Service';
import { QuestionService } from '../../Question/question.service';
import { MatTable } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddedQuestionEvaluationModel } from '../ViewModel/AddedQuestionEvaluationModel';


@Component({
  selector: 'app-add-question-to-evaluation',
  templateUrl: './add-question-to-evaluation.component.html',
  styleUrls: []
})
export class AddQuestionToEvaluationComponent implements OnInit, OnChanges {

  isLoading: boolean = false;
  evalId: number = 0;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  messageT: string = '';
  @ViewChildren(MatTable) table !: QueryList<MatTable<string>>;


  AllQuestionsForEvaluationArr: QuestionForEvaluationModel[] = [];
  NewallQuestionsForEvaluationArr: QuestionForEvaluationModel[] = [];
  DeleteQuestionsForEvaluationArr: QuestionForEvaluationModel[] = [];
  AllQuestionArr: QuestionModel[] = [];

  displayedColumns: string[] = ['question', 'action'];

  constructor(private route: ActivatedRoute, private evalService: EvalService,
    private quesService: QuestionService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.messageT = '';
    this.evalId = this.route.snapshot.params['id'];
    this.evalService.onGetAllQuestionForEvaluation(this.evalId).subscribe(
      result => {
        this.AllQuestionsForEvaluationArr = result;
      });

    this.quesService.onGetAll().subscribe({
      next: (result) => {
        this.AllQuestionArr = result;
        this.isLoading = false;
      },
      error: error => {
        console.log(error.error);
        this.isLoading = false;
      },
      complete: () => {
        this.removeDublicate();
      }
    })
  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  addQuestionToEval(ques: QuestionModel) {

    let newQues: QuestionForEvaluationModel = {};
    newQues.evaluationId = this.evalId;
    newQues.questionId = ques.id;
    newQues.question = ques.question;

    if (this.AllQuestionsForEvaluationArr === null || this.AllQuestionsForEvaluationArr === undefined) {
      this.AllQuestionsForEvaluationArr = []
    }
    if (this.NewallQuestionsForEvaluationArr === null || this.NewallQuestionsForEvaluationArr === undefined) {
      this.NewallQuestionsForEvaluationArr = []
    }

    this.AllQuestionsForEvaluationArr.push(newQues);
    this.NewallQuestionsForEvaluationArr.push(newQues);

    const index = this.AllQuestionArr.findIndex((object) => {
      return object.id === ques.id;
    });

    if (index > -1) {
      this.AllQuestionArr.splice(index, 1);
    };
    this.table.first.renderRows();
    this.table.last.renderRows();

  }
  removeDublicate() {

    if (this.AllQuestionsForEvaluationArr.length != 0) {
      this.AllQuestionsForEvaluationArr.forEach(element => {

        const index = this.AllQuestionArr.findIndex((object) => {
          return object.id === element.questionId;
        });

        if (index > -1) {
          this.AllQuestionArr.splice(index, 1);
        }
      });
    }
  }

  RemoveQues(ques: QuestionForEvaluationModel) {
    if (this.AllQuestionsForEvaluationArr != null || this.AllQuestionsForEvaluationArr != undefined) {
      const index = this.AllQuestionsForEvaluationArr
        .findIndex(x => x.questionId === ques.questionId);
      if (index > -1) {
        this.AllQuestionsForEvaluationArr.splice(index, 1);
      }
    }

    if (this.NewallQuestionsForEvaluationArr != null || this.NewallQuestionsForEvaluationArr != undefined) {
      const NewIndex = this.NewallQuestionsForEvaluationArr
        .findIndex(x => x.questionId === ques.questionId);
      if (NewIndex > -1) {
        this.NewallQuestionsForEvaluationArr.splice(NewIndex, 1);
      }
    }

    if (ques.id != undefined) {
      this.DeleteQuestionsForEvaluationArr.push(ques);
    }
    let newQuesObject: QuestionModel = {
      id: ques.questionId,
      question: ques.question
    };

    this.AllQuestionArr.push(newQuesObject);

    console.log("All Quest Array");
    console.log(this.AllQuestionArr);

    console.log("All Quest For eval Array");
    console.log(this.AllQuestionsForEvaluationArr);

    console.log("Delete Array");
    console.log(this.DeleteQuestionsForEvaluationArr);

    this.table.first.renderRows();
    this.table.last.renderRows();
  }


  saveQuestionForEvaluation() {
    let questionEvaluationUpdatedArray: AddedQuestionEvaluationModel[] = [];
    if (this.NewallQuestionsForEvaluationArr != null) {
      this.isLoading = true;
      this.NewallQuestionsForEvaluationArr.forEach(element => {
        let data: AddedQuestionEvaluationModel = {
          questionId: element.questionId,
          evaluationId: element.evaluationId
        }
        questionEvaluationUpdatedArray.push(data);
      });
      this.evalService.AddQuestionToEvaluationPost(questionEvaluationUpdatedArray)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.isLoading = false;
            this.evalService.openSuccessToast('action saved Successfully');
          },
          error: error => {
            console.log(error.error);
            this.isLoading = false;
            this.evalService.openErrorsToast();
          }
        });
    }
    if (this.DeleteQuestionsForEvaluationArr != null) {
      this.DeleteQuestionsForEvaluationArr.forEach(element => {
        this.evalService.DeleteQuestionsFormEvaluation(element.id!);
      });
    }
  }

}
