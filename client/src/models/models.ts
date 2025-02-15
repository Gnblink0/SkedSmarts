export enum Weekday {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  color: string;
  unavailableDays: Weekday[];
  unavailableDates: string[];
  maxHoursPerWeek?: number;
  isActive: boolean;
}

export interface Shift {
  id: string;
  employeeId: string;
  date: Date;
  startTime: string;
  endTime: string;
  haveBreak: boolean;
  totalHours: number;
  actualWorkHours: number;
}
