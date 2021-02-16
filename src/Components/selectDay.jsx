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
      }
    }
    else{
      for (let index = 1; index <= 29; index++) {
        daysList.push(<option key={`key-${index}`} value={index}>{index}</option>)
      }
    }
  }
  else{
    for (let index = 1; index <= LongMonths[month]; index++) {
      daysList.push(<option key={`key-${index}`} value={`${index}`}>{index}</option>)
    }
  }
}

export default class SelectDay extends Component {
  constructor(props){
    super(props);
    this.state = { 
      month: props.selectedMonth,
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
    return(
      <select id="Birth_Day" value={this.props.selectedDay} className="input-birth-month" onChange={this.props.onDayChange}>
        {daysList}
      </select>)
  }
}