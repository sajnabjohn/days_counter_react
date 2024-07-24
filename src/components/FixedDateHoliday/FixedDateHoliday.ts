import { FixedHoliday } from '../../interfaces/Holidays';

//Fixed day Hoiday class return the boolean
class FixedDateHoliday implements FixedHoliday {
   month: number;
   day: number;

   constructor(month: number, day: number) {
      this.month = month;
      this.day = day;
   }
   // return holiday if the month and day matches the holliday input
   isHoliday(date: Date): boolean {
      return date.getMonth() === this.month - 1 && date.getDate() === this.day;
   }
}

export default FixedDateHoliday;
