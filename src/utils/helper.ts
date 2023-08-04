import { IJob } from '@/types/job.type';

const jobsList: IJob[] = [
  {
    id: '0',
    title: 'Front-end Developer',
    location: 'Hyderabad',
    salaray: 50000,
    description:
      'A Front-end Developer is a type of web developer who is responsible for creating and maintaining the user interface (UI) of a website or application.',
  },
  {
    id: '1',
    title: 'Back-end Developer',
    location: 'Hyderabad',
    salaray: 70000,
    description:
      'A Back-end Developer is a type of web developer who is responsible for building and maintaining the server-side of a website or application.',
  },
  {
    id: '2',
    title: 'Devops Engineer',
    location: 'Hyderabad',
    salaray: 40000,
    description:
      'A DevOps Engineer is a professional who bridges the gap between software development and operations teams, with the goal of delivering software applications more quickly and efficiently.',
  },
];

export default jobsList;
