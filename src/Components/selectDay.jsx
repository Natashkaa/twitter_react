import React, { Component } from "react";
import { createPortal } from "react-dom";
import "../styles/modal.css"

const LongMonths = [
    {january: 31},
    {march: 31},
    {april: 30},
    {may: 31},
    {june: 30},
    {july: 31},
    {august: 31},
    {september: 30},
    {october: 31},
    {november: 30},
    {december: 31}
]

export default class SelectDay extends Component {
      render() {
          if (this.props.selectedMonth != "february") {
              return(
              <div>
                <select id="Birth_Month" className="input-birth-month" >
                    <option value="december">Декабрь</option><option value="january">Январь</option><option value="february">Февраль</option>
                    <option value="march">Март</option><option value="april">Апрель</option><option value="may">Май</option>
                    <option value="june">Июнь</option><option value="july">Июль</option><option value="august">Август</option>
                    <option value="september">Сентябрь</option><option value="october">Октябрь</option><option value="november">Ноябрь</option>
                </select>
            </div>,
              document.getElementById("modal_root")
            ) 
          }
          
        }
  }