import FixedDateHoliday from '../components/FixedDateHoliday/FixedDateHoliday';
import WeekendHolidayAdjustment from '../components/WeekendHolidayAdjustment/WeekendHolidayAdjustment';
import NthDayInMonthHoliday from '../components/NthDayInMonthHoliday/NthDayInMonthHoliday';
import { HolidayRule } from '../interfaces/HolidayRule';
import {
   FixedHoliday,
   WeekendHoliday,
   NthDayMonthHoliday,
} from '../interfaces/Holidays';

//Add yours holiday inputs here
// 0 = Sunday, 1 = Monday, ..., 6 = Saturday
// 1 = Jan, 2 = Feb, ........., 12 =  Dec

const FixedHolidayInput: FixedHoliday = { month: 4, day: 25 }; // Anzac Day on April 25th every year
const WeekendHolidayInput: WeekendHoliday = { month: 1, day: 1 }; // New Year's Day on January 1st, adjusted if it's a weekend
const QueensBirthday: NthDayMonthHoliday = {
   nth: 2,
   day: 1,
   month: 6,
}; // Queen's Birthday on the second Monday in June every year
const fifthMondayJune: NthDayMonthHoliday = {
   nth: 5,
   day: 1,
   month: 6,
}; // Test sample

// Define holiday rules
export const holidayRules: HolidayRule[] = [
   new FixedDateHoliday(FixedHolidayInput.month, FixedHolidayInput.day),
   new WeekendHolidayAdjustment(
      WeekendHolidayInput.month,
      WeekendHolidayInput.day,
   ),
   new NthDayInMonthHoliday(
      QueensBirthday.nth,
      QueensBirthday.day,
      QueensBirthday.month,
   ),
   new NthDayInMonthHoliday(
      fifthMondayJune.nth,
      fifthMondayJune.day,
      fifthMondayJune.month,
   ),
];
