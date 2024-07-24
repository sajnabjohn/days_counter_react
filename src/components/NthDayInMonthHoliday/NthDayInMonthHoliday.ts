import { NthDayMonthHoliday } from '../../interfaces/Holidays';

//nth day in a month class returns holiday for a purticular day in a month (example: 2nd monday of June)
class NthDayInMonthHoliday implements NthDayMonthHoliday {
   nth: number;
   day: number;
   month: number;

   constructor(nth: number, day: number, month: number) {
      this.nth = nth;
      this.day = day;
      this.month = month;
   }

   isHoliday(date: Date): boolean {
      const firstOfMonth = new Date(date.getFullYear(), this.month - 1, 1); // find the day of the month start

      let daysToAdd = (this.day - firstOfMonth.getDay() + 7) % 7; // Calculate the daysToAdd to reach the first occurrence of 'day' in the month

      let holidayDate = new Date(
         date.getFullYear(),
         this.month - 1,
         1 + daysToAdd + (this.nth - 1) * 7,
      ); // Calculate the date of the holiday based on the nth occurrence of 'day'

      if (holidayDate.getMonth() !== this.month - 1) {
         // If the calculated holiday date is in the next month, adjust to the previous nth occurrence
         holidayDate = new Date(
            date.getFullYear(),
            this.month - 1,
            1 + daysToAdd + (this.nth - 2) * 7,
         );
      }

      return date.getTime() === holidayDate.getTime();
      // Compare the input date with the calculated holiday date to determine if it's a holiday
   }
}

export default NthDayInMonthHoliday;
