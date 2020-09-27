
export interface Task{
  Id: number;
  UserId: string;
  Name: string;
  Description: string;
  StartDate: any;
  DueDate: any;
  SubTasks: [];
   TaskTags: [];
  Priority: number;
   State: number;
  Visible: boolean;
  ElapsedTime: number;
}
