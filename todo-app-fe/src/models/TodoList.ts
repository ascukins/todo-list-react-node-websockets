/*
    It is not planned to implement anything apart from the basic functionality in the first iteration,
    but, as requirements exist and make sense, 
    let's do a little bit of top to bottom architecture approach and declare potential data structures.
    It will add almost nothing to the cost of the MVP, but will help with the project development later.
*/

export type CostUnit = 'Hours' | 'Euros';

export interface Task {
  id: number;
  name: string;
  isDone: boolean;
  description?: string;
  cost?: number;
  costUnit?: CostUnit;
  tasks?: Task[];
}

export interface TaskList extends Task {}
