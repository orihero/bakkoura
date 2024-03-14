import {makeAutoObservable} from 'mobx';
import {createContext} from 'react';
import {AlarmStore} from './alarm/Alarm';
import {AuthStore} from './auth/authStore';
import {CalendarStore} from './calendar/Calendar';
import {StressTestStore} from './stressTest/StressTest';
import {TimerStore} from './timer/Timer';

export class RootStore {
  timerStore: TimerStore;
  calendarStore: CalendarStore;
  authStore: AuthStore;
  stressTestStore: StressTestStore;
  alarmStore: AlarmStore;

  constructor() {
    makeAutoObservable(this);
    this.timerStore = new TimerStore(this);
    this.calendarStore = new CalendarStore(this);
    this.authStore = new AuthStore(this);
    this.stressTestStore = new StressTestStore(this);
    this.alarmStore = new AlarmStore(this);
  }
}
const rootStore = new RootStore();

export default createContext(rootStore);
