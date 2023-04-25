import "./Calendar.css";
import { useState } from "react";
import {connect, useSelector} from 'react-redux'
import { ListOfMonth } from "../../constants/calendar";
import { ChangeMonth } from "../../actions/CalendarAction";

 function Calendar(props) {
   
  // const state= useSelector((state)=> state);
  // console.log(state);

  const ChangeMnth=(arrow)=>{

   let selectedMonth;
   let selectedYear;

   if(arrow=== 'Left'){

    if(props.selectedMonth==0){
      selectedMonth= 11
      selectedYear= props.selectedYear -1
    }
    else{
      selectedMonth= props.selectedMonth -1
      selectedYear= props.selectedYear
    }
   }
   else if(arrow==='Right'){
    if(props.selectedMonth=== 11){
      selectedMonth= 0
      selectedYear =props.selectedYear +1 
    }else{
      selectedMonth= props.selectedMonth + 1
      selectedYear = props.selectedYear 
    }
   }

   props.dispatch({
    type:ChangeMonth,
    payload: {
      selectedMonth,
      selectedYear
    }
   })


  }

  return (
    <div className="calendar-container">
      <div className="calendar-inner-container">
        <h2> Calendar</h2>
        <div className="calendar-display">
          <div className="month-header">
            <div onClick={()=> ChangeMnth('Left')} className="left-arrow">{"<"}</div>
            <div id="month">{ListOfMonth[props.selectedMonth]} , {props.selectedYear}</div>
            <div onClick={()=> ChangeMnth('Right')} className="right-arrow">{">"}</div>
          </div>

          <div className="calendar-container-child">
            <div> Sun </div>
            <div> Mon</div>
            <div> Tue </div>
            <div> Wed </div>
            <div> Thur </div>
            <div> Fri </div>
            <div> Sat </div>
          </div>

          <div className="calendar-container-child">
           
            {props.days?.map((day,index)=>{
              return <div key={`${index}${day}`}
              className={new Date().getDate()== day? "active":""}>
                   {day}
                </div>
            }
            )}
           
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    startDay: state.startDay,
    endDate: state.endDate,
    selectedMonth: state.selectedMonth,
    selectedYear: state.selectedYear,
    days: state.days
  }
}

export default  connect(mapStateToProps)(Calendar)
