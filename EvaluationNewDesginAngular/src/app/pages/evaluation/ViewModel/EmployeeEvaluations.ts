import { EvaluationModel } from "./EvaluationModel";

export interface EmployeeEvaluations{
    employeeId: number;
    employeeName: string;
    employeeRole: string;
    employeeEmail: string;
    evaluationModels: EvaluationModel[];
   
}