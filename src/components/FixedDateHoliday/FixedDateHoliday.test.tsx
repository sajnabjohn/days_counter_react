import { holidayRules } from '../../utils/constants';
import BusinessDayCounter from '../BusinessDayCounter/BusinessDayCounter';

describe('countWeekdays and business days function', () => {
   it('Anzac Day on April 25th every yeard', () => {
      const startDate1 = new Date('2024-04-22');
      const endDate1 = new Date('2024-04-30');
      expect(
         new BusinessDayCounter().BusinessDaysBetweenTwoDates(
            startDate1,
            endDate1,
            holidayRules,
         ),
      ).toBe(4);
   });
});
