// function to check is a weekday

export function isWeekday(date: Date): boolean {
   const day = date.getDay();
   return day !== 0 && day !== 6; // 0 is Sunday, 6 is Saturday
}
