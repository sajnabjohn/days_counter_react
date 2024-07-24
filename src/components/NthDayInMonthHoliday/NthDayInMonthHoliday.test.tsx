import { holidayRules } from '../../utils/constants';
import BusinessDayCounter from '../BusinessDayCounter/BusinessDayCounter';

describe('countWeekdays and business days function', () => {
   it("Queen's Birthday on the second Monday in June every year", () => {
      const startDate1 = new Date('2024-06-01');
      const endDate1 = new Date('2024-06-15');
      expect(
         new BusinessDayCounter().BusinessDaysBetweenTwoDates(
            startDate1,
            endDate1,
            holidayRules,
         ),
      ).toBe(9);
   });
});
