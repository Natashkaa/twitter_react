import React, { Component } from "react";
import "../styles/modal.css"

const LongMonths = {
  january: 31,
  february: 28,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  september: 30,
  october: 31,
  november: 30,
  december: 31
}
var daysList = [];
function CompleteMonth(year, month){
  daysList = [];
  if(month == "february"){
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
  componentWillReceiveProps(nextProps) {
    if(nextProps.selectedMonth !== this.props.selectedMonth || nextProps.selectedYear !== this.props.selectedYear) {
      this.setState({ month: nextProps.selectedMonth, year: nextProps.selectedYear});
    }
  }
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
                <option value="december">Декабрь</option><option value="january">Январь</option><option value="february">Февраль</option>
                <option value="march">Март</option><option value="april">Апрель</option><option value="may">Май</option>
                <option value="june">Июнь</option><option value="july">Июль</option><option value="august">Август</option>
                <option value="september">Сентябрь</option><option value="october">Октябрь</option><option value="november">Ноябрь</option>
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