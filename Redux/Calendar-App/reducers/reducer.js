import { ChangeMonth } from "../actions/CalendarAction";
import { getDays } from "../Utils/CalendarUtils";
import {
  daysInMonth,
  monthDay,
  selectedMonth,
  selectedYear
} from "../Utils/DateUtils";

const startDay = monthDay(`${selectedMonth + 1}-01-${selectedYear}`);

const endDate = daysInMonth(selectedYear, selectedMonth);

const initialState = {
  startDay,
  endDate,
  selectedMonth,
  selectedYear,
  days: getDays(startDay, endDate)
};

const CalendarReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ChangeMonth:
    // logic to change the Month
   
    const {selectedMonth,selectedYear}= action.payload;

     const startDay= monthDay(`${selectedMonth + 1}-01-${selectedYear}`);
     const  endDate = daysInMonth(selectedYear, selectedMonth);
       const days= getDays(startDay,endDate)

       
       return{...state, selectedMonth,selectedYear,days,startDay,endDate}
    default:
      return state;
  }
};

export default CalendarReducer;
