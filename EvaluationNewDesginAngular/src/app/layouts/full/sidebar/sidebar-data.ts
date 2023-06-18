import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Evaulation',
  },
  {
    displayName: 'All Evaluations',
    iconName: 'layout-dashboard',
    route: '/evaluation/evaluationList'
    //route: '/dashboard',

    // displayName: 'All Evaluation',
    // iconName: 'rosette',
    // route: '/ui-components/badge',
  },
  {
    displayName: 'New Evaluations',
    iconName: 'layout-dashboard',
    route: '/evaluation/newevaluation'
  },
  {
    navCap: 'Questions',
  },
  {
    displayName: 'All Questions',
    iconName: 'poker-chip',
    route: '/question/Queslist',
  },
  {
    displayName: 'New Questions',
    iconName: 'poker-chip',
    route: '/question/newQues',
  },
  {
    navCap: 'Employee',
  },
  {
    displayName: 'Employee Evaluation',
    iconName: 'user-plus',
    route: '/employee/empeval',
  }, 
  {
    displayName: 'Manger Evaluation',
    iconName: 'user-plus',
    route: '/employee/mangeval',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
];
