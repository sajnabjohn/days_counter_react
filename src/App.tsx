import React, { useState } from 'react';
import BusinessDayCounter from './components/BusinessDayCounter/BusinessDayCounter';
import { holidayRules } from './utils/constants';

const App: React.FC = () => {
   const [firstDate, setFirstDate]        = useState('2024-07-22');
   const [secondDate, setSecondDate]      = useState('2024-07-30');
   const [weekdays, setWeekdays]          = useState<number | null>(null);
   const [businessDays, setBusinessDays]  = useState<number | null>(null);

   const handleCalculate = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
   ) => {
      //
      e.preventDefault();
      // Convert input strings to Date objects
      var startDate = new Date(firstDate);
      var endDate = new Date(secondDate);

      // Calculate weekdays days
      const weekDaysCount = new BusinessDayCounter().WeekdaysBetweenTwoDates(
         startDate,
         endDate,
      );
      setWeekdays(weekDaysCount);
      // Calculate business days
      const businessDaysCount =
         new BusinessDayCounter().BusinessDaysBetweenTwoDates(
            startDate,
            endDate,
            holidayRules,
         );
      setBusinessDays(businessDaysCount);
   };

   return (
      <div className="mainDiv">
         <h2>Business Days Counter</h2>
         <div className="display">
            <div>
               <form id="businessDaysForm">
                  <div id="card">
                     <div className="input">
                        <label htmlFor="firstDate">First Date:</label>
                        <input
                           type="date"
                           id="firstDate"
                           value={firstDate}
                           onChange={(e) => setFirstDate(e.target.value)}
                           required
                        />
                     </div>
                     <div className="input">
                        <label htmlFor="secondDate">Second Date:</label>
                        <input
                           type="date"
                           id="secondDate"
                           value={secondDate}
                           onChange={(e) => setSecondDate(e.target.value)}
                           required
                        />
                     </div>
                  </div>
                  <button
                     type="submit"
                     onClick={(event) => handleCalculate(event)}
                  >
                     Calculate Days
                  </button>
               </form>
            </div>
         </div>
         { weekdays !=null ? (
            <div className="tablediv">
               <table id="table">
                  <tbody>
                     <tr>
                        <th>Type</th>
                        <th>Count</th>
                     </tr>
                     <tr>
                        <td>Weekdays</td>
                        <td id="weekdays">{weekdays}</td>
                     </tr>
                     <tr>
                        <td>Business Days</td>
                        <td id="businessdays">{businessDays}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         ) : (
            <></>
         )}
      </div>
   );
};
export default App;
