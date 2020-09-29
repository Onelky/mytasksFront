
export interface Task{
  id: number;
  name: string;
  description: string;
  startDate: any;
  dueDate: any;
  subTasks?: [];
  tags?: [];
  priority: number;
  state: number;
  visible: boolean;
  elapsedTime: number;
}
