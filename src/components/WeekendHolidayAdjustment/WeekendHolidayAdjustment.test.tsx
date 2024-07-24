import { holidayRules } from '../../utils/constants';
import BusinessDayCounter from '../BusinessDayCounter/BusinessDayCounter';

describe('countWeekdays and business days function', () => {
   it("New Year's Day on January 1st, adjusted if it's a weekend", () => {
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
});
