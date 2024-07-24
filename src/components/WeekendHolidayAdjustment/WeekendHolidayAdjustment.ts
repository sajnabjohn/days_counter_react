import { WeekendHoliday } from '../../interfaces/Holidays';

// Weekend hiliday adjustment class returns holiday
class WeekendHolidayAdjustment implements WeekendHoliday {
   month: number;
   day: number;

   constructor(month: number, day: number) {
      this.month = month;
      this.day = day;
   }

   isHoliday(date: Date): boolean {
      const holidayDate = new Date(
         date.getFullYear(),
         this.month - 1,
         this.day,
      );
      const dayOfWeek = holidayDate.getDay();

      if (dayOfWeek === 0) {
         // Sunday
         holidayDate.setDate(holidayDate.getDate() + 1); // Move to Monday
      } else if (dayOfWeek === 6) {
         // Saturday
         holidayDate.setDate(holidayDate.getDate() + 2); // Move to Monday
      }
      return date.getTime() === holidayDate.getTime();
   }
}

export default WeekendHolidayAdjustment;
