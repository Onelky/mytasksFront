
export interface Task{
  id: number;
  name: string;
  description: string;
  startDate: string;
  dueDate: string;
  subTasks?: [];
  tags?: [];
  priority: number;
  state: number;
  visible: boolean;
  elapsedTime: number;
}
