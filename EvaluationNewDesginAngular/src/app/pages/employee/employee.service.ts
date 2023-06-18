import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }



  getAllEvaluationForEmployee(emoloyeeId: number) {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", emoloyeeId);

    let data = this.http
      .get<any>(
        'https://localhost:7199/api/Employee/GetAllEvaluationForEmployee',
        {
          params: queryParams
        }
      );
    return data;

  }

  getAllEvaluationForManger(MangerId: number) {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", MangerId);

    let data = this.http
      .get<any>(
        'https://localhost:7199/api/Employee/GetAllEvaluationForManger',
        {
          params: queryParams
        }
      );
    return data;

  }

  postEmployeeAnswer(employeeAnswer: any){
    let data = this.http.post<any>(
      'https://localhost:7199/api/Employee/AddEmployeeAnswer',
      employeeAnswer
    )
  return data;
  }

  GetEmployeiesEvaluationsForManger(mangerId: number){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", mangerId);
    let data = this.http.get<any>(
      'https://localhost:7199/api/Employee/GetAllEvaluationForManger',{
        params : queryParams
      }
    )
  return data;
  }
}
