import { EmployeeEvaluations } from "./EmployeeEvaluations";

export interface MangerEvaluations{
    managerId: number;
    managerName: string;
    managerRole: string;
    managerEmail: string;
    evaluationModels: EmployeeEvaluations[];
   
}