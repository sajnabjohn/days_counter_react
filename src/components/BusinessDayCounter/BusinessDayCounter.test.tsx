import { holidayRules } from '../../utils/constants';
import BusinessDayCounter from './BusinessDayCounter';

describe('countWeekdays and business days', () => {
   it('returns 0 Weekdays when start date is after end date', () => {
      const startDate = new Date('2024-07-26');
      const endDate = new Date('2024-07-22');
      const weekdaysCount = new BusinessDayCounter().WeekdaysBetweenTwoDates(
         startDate,
         endDate,
      );
      expect(weekdaysCount).toBe(0);
   });

   it('returns 0 Weekdays when both dates are the same ', () => {
      const startDate = new Date('2024-07-21');
      const endDate = new Date('2024-07-21');
      const weekdaysCount = new BusinessDayCounter().WeekdaysBetweenTwoDates(
         startDate,
         endDate,
      );
      expect(weekdaysCount).toBe(0);
   });

   it('returns 0 Business Days Between Two Dates when start date is after end date', () => {
      const startDate = new Date('2024-07-26');
      const endDate = new Date('2024-07-22');
      const businessDaysCount =
         new BusinessDayCounter().BusinessDaysBetweenTwoDates(
            startDate,
            endDate,
            holidayRules,
         );
      expect(businessDaysCount).toBe(0);
   });

   it('returns 0 Business Days Between Two Dates when both dates are the same', () => {
      const startDate = new Date('2024-07-21');
      const endDate = new Date('2024-07-21');
      const businessDaysCount =
         new BusinessDayCounter().BusinessDaysBetweenTwoDates(
            startDate,
            endDate,
            holidayRules,
         );
      expect(businessDaysCount).toBe(0);
   });

   it('counts weekdays correctly when start date is Monday and end date is Friday', () => {
      const startDate = new Date('2024-07-21');
      const endDate = new Date('2024-07-27');
      const weekdaysCount = new BusinessDayCounter().WeekdaysBetweenTwoDates(
         startDate,
         endDate,
      );
      expect(weekdaysCount).toBe(5);
   });

   it('counts weekdays correctly when start date and end date are the same weekday', () => {
      const startDate = new Date('2024-07-20');
      const endDate = new Date('2024-07-30');
      const weekdaysCount = new BusinessDayCounter().WeekdaysBetweenTwoDates(
         startDate,
         endDate,
      );
      expect(weekdaysCount).toBe(6);
   });

   it('counts business days correctly between two dates excluding weekends', () => {
      const startDate = new Date('2024-07-25');
      const endDate = new Date('2024-07-30');
      const businessDaysCount =
         new BusinessDayCounter().BusinessDaysBetweenTwoDates(
            startDate,
            endDate,
            holidayRules,
         );
      expect(businessDaysCount).toBe(2);
   });
});
