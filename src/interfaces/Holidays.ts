export interface FixedHoliday {
   month: number;
   day: number;
}

export interface WeekendHoliday {
   month: number;
   day: number;
}

export interface NthDayMonthHoliday {
   nth: number;
   day: number;
   month: number;
}
