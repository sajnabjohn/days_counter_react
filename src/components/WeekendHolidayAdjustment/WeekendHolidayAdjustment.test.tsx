import { holidayRules } from '../../utils/constants';
import BusinessDayCounter from '../BusinessDayCounter/BusinessDayCounter';

describe('countWeekdays and business days function', () => {
   it("New Year's Day on January 1st, adjusted if it's a Sunday", () => {
      const startDate1 = new Date('2023-01-01');
      const endDate1 = new Date('2023-01-07');
      expect(
         new BusinessDayCounter().BusinessDaysBetweenTwoDates(
            startDate1,
            endDate1,
            holidayRules,
         ),
      ).toBe(4);
   });

   it("New Year's Day on January 1st, adjusted if it's a Saturday", () => {
      const startDate1 = new Date('2022-01-01');
      const endDate1 = new Date('2022-01-07');
      expect(
         new BusinessDayCounter().BusinessDaysBetweenTwoDates(
            startDate1,
            endDate1,
            holidayRules,
         ),
      ).toBe(3);
   });
});
