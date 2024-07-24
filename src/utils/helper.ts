// function to check is a weekday

export function isWeekday(date: Date): boolean {
   const day = date.getDay();
   return day !== 0 && day !== 6; // 0 is Sunday, 6 is Saturday
}

// function used fro task 2 to check fixed holday list (Not removing for refrence)

export function isHoliday(date: Date, holidays: Date[]): boolean {
   const dateString = date.toLocaleDateString('en-US').split('T')[0];
   return holidays.some((holiday) => {
      let holidayString = holiday.toLocaleDateString('en-US').split('T')[0];
      if (holidayString === dateString) {
         return true;
      } else {
         return false;
      }
   });
}
