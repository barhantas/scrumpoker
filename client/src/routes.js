import CreateSprintPage from './pages/CreateSprintPage';
import SprintListPage from './pages/SprintListPage';
import ManageSprintPage from './pages/ManageSprintPage';
import JoinPokerPage from './pages/JoinPokerPage';

export const ROUTES = [
  {
    icon: 'plus-circle',
    path: '/',
    name: 'Create Sprint',
    component: CreateSprintPage,
    disableSider: false,
    disableHeader: false,
    disableFooter: true,
    disableContentHeader: true,
  },
  {
    icon: 'bars',
    path: '/all-sprints',
    name: 'All Sprints',
    component: SprintListPage,
    disableSider: false,
    disableHeader: false,
    disableFooter: true,
    disableContentHeader: true,
  },
  {
    icon: 'dashboard',
    path: '/sprints',
    name: 'Manage Sprint',
    component: ManageSprintPage,
    disableSider: false,
    disableHeader: false,
    disableFooter: true,
    disableContentHeader: true,
  },
  {
    icon: 'login',
    path: '/join-poker',
    name: 'Join Poker',
    component: JoinPokerPage,
    disableSider: false,
    disableHeader: false,
    disableFooter: true,
    disableContentHeader: true,
  },
];
