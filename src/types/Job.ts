export interface IJob {
  id: string;
  title: string;
  location: string;
  salaray: number;
  description: string;
}

export type IOrderTerm = 'title' | 'description' | 'salaray'
