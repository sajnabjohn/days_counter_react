import { HolidayRule } from '../../interfaces/HolidayRule';
import { isWeekday } from '../../utils/helper';

// BusinessDayCounter Class
class BusinessDayCounter {
   // Weekdays count for Task 1
   WeekdaysBetweenTwoDates(startDate: Date, endDate: Date): number {
      let firstDate = new Date(startDate.toDateString());
      firstDate.setDate(startDate.getDate() + 1);
      let secondDate = new Date(endDate.toDateString());

      //validate the start date should be greater than end date
      if (firstDate >= secondDate) {
         return 0;
      }

      // Calculate number of complete weeks between start and end dates
      const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
      const fullWeeks = Math.floor(
         (secondDate.getTime() - firstDate.getTime()) / (7 * oneDay),
      );

      // Calculate weekdays in full weeks
      const weekdaysInFullWeeks = fullWeeks * 5;

      // Calculate weekdays in the remaining days after full weeks
      let remainingDays =
         (secondDate.getTime() - firstDate.getTime()) / oneDay - fullWeeks * 7;
      let weekdaysInRemainingDays = 0;
      let currentDay = new Date(firstDate);

      for (let i = 0; i < remainingDays; i++) {
         if (currentDay.getDay() !== 0 && currentDay.getDay() !== 6) {
            weekdaysInRemainingDays++;
         }
         currentDay.setDate(currentDay.getDate() + 1);
      }

      return weekdaysInFullWeeks + weekdaysInRemainingDays;
   }

   // Business days count for Task 2 and Task 3
   BusinessDaysBetweenTwoDates(
      firstDate: Date,
      secondDate: Date,
      holidayRules: HolidayRule[],
   ): number {
      let count = 0;
      let currentDate = new Date(firstDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
      let endDate = new Date(secondDate.toDateString());
      endDate.setDate(endDate.getDate() - 1);

      while (currentDate <= endDate) {
         let isHoliday = false;
         if (isWeekday(currentDate)) {
            for (const holidayRule of holidayRules) {
               // We will iterate through the holiday inputs and campare whether the current date is a holiday
               if (holidayRule.isHoliday(currentDate)) {
                  isHoliday = true;
                  break;
               }
            }
            if (!isHoliday) {
               count++;
            }
         }
         currentDate.setDate(currentDate.getDate() + 1);
      }
      return count;
   }
}

export default BusinessDayCounter;
