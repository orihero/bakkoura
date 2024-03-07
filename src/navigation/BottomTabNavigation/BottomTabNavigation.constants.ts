import EventsScreen from '../../screens/calendar/EventsScreen';
import HomeScreen from '../../screens/home/HomeScreen';
import MessengerScreen from '../../screens/messenger/MessengerScreen';
import ProjectTimer from '../../screens/projectTimer/ProjectTimer';
import StopWatch from '../../screens/stopWatch/StopWatch';
import TimerScreen from '../../screens/timers/TimerScreen';
import ToDoTimer from '../../screens/todoTimer/ToDoTimer';
import WorldTime from '../../screens/worldTime/WorldTime';
import {APP_ROUTES} from '../routes';

export const bottomTabBarOptions = {
  options: {
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    headerShown: false,
  },
  list: [
    {
      index: 0,
      tabName: APP_ROUTES.TIMER,
      component: TimerScreen,
      buttonLabel: 'Timer',
    },
    {
      index: 1,
      tabName: APP_ROUTES.EVENTS_SCREEN,
      component: EventsScreen,
      buttonLabel: 'Calendar',
    },
    {
      index: 2,
      tabName: APP_ROUTES.MESSENGER,
      component: MessengerScreen,
      buttonLabel: 'Messenger',
    },
    {
      index: 3,
      tabName: APP_ROUTES.TODOTIMER,
      component: ToDoTimer,
      buttonLabel: 'To do timer',
    },
    {
      index: 4,
      tabName: APP_ROUTES.HOME_START,
      component: HomeScreen,
      buttonLabel: 'Home',
    },
    {
      index: 5,
      tabName: APP_ROUTES.PROJECT_TIMER,
      component: ProjectTimer,
      buttonLabel: 'Project timer',
    },
    {
      index: 6,
      tabName: APP_ROUTES.WORLD_TIME,
      component: WorldTime,
      buttonLabel: 'World time',
    },
    {
      index: 7,
      tabName: APP_ROUTES.STOP_WATCH,
      component: StopWatch,
      buttonLabel: 'Stop watch',
    },
  ],
};
