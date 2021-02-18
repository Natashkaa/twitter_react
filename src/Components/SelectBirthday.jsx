import React, { Component } from "react";
import "../styles/modal.css"

const LongMonths = {
  "1": 31,
  "2": 28,
  "3": 31,
  "4": 30,
  "5": 31,
  "6": 30,
  "7": 31,
  "8": 31,
  "9": 30,
  "10": 31,
  "11": 30,
  "12": 31
}
var daysList = [];
function CompleteMonth(year, month){
  daysList = [];
  if(month === "2"){
    if(parseInt(year) % 4){
      for (let index = 1; index <= 28; index++) {
        daysList.push(<option key={`key-${index}`} value={index}>{index}</option>)
      }}
    else{
      for (let index = 1; index <= 29; index++) {
        daysList.push(<option key={`key-${index}`} value={index}>{index}</option>)
      }}}
  else{
    for (let index = 1; index <= LongMonths[month]; index++) {
      daysList.push(<option key={`key-${index}`} value={`${index}`}>{index}</option>)
    }}
}

var yearsList = [];
function CompleteYears(){
  yearsList = [];
  for (let index = new Date().getFullYear(); index >= 1901; index--) {
    yearsList.push(<option key={`y-key-${index}`} value={`${index}`}>{index}</option>)
  }
}

export default class SelectBirthday extends Component {
  constructor(props){
    super(props);
    this.state = { 
      month: props.selectedMonth,
      day: props.selectedDay,
      year: props.selectedYear
    }
  }
  static getDerivedStateFromProps(props, state){
    // if(props.currentRow !== state.lastRow){
    //   return { month: props.selectedMonth, day: props.selectedDay, year: props.selectedYear};
    // }
    if(props.selectedMonth !== state.selectedMonth || props.selectedYear !== state.selectedYear){
      return { month: props.selectedMonth, day: props.selectedDay, year: props.selectedYear};
    }
    return null;
  }
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.selectedMonth !== this.props.selectedMonth || nextProps.selectedYear !== this.props.selectedYear) {
  //     this.setState({ month: nextProps.selectedMonth, day: nextProps.selectedDay, year: nextProps.selectedYear});
  //   }
  // }
  render() {
    CompleteMonth(this.state.year, this.state.month);
    CompleteYears();
    return(
        <div className="birth-container">
          <div className="user-birth-month">
            <div className="shell">
              <div className="shell-row1">
                <div className="div-name">Месяц</div>
              </div>
              <select id="Birth_Month" className="input-birth-month" value={this.state.month} onChange={this.props.onMonthChange}>
                <option value="12">Декабрь</option><option value="1">Январь</option><option value="2">Февраль</option>
                <option value="3">Март</option><option value="4">Апрель</option><option value="5">Май</option>
                <option value="6">Июнь</option><option value="7">Июль</option><option value="8">Август</option>
                <option value="9">Сентябрь</option><option value="10">Октябрь</option><option value="11">Ноябрь</option>
              </select>
            </div>
          </div>

          <div className="user-birth-day">
            <div className="shell">
              <div className="shell-row1">
                <div className="div-name">Число</div>
              </div>
              <select id="Birth_Day" value={this.state.day} className="input-birth-month" onChange={this.props.onDayChange}>
                {daysList}
              </select>
            </div>
          </div>

          <div className="user-birth-year">
              <div className="shell">
                <div className="shell-row1">
                  <div className="div-name">Год</div>
                </div>
                <select id="Birth_Year" className="input-birth-year" value={this.state.year} onChange={this.props.onYearChange}>
                  {yearsList}
                </select>
              </div>
            </div>
      
      </div>)
  }
}