import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import '../styles/user_page.css';
import bird from  '../icons/bird.png';

export default class User_Page extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="main-block">
                <div className="left-menu-block">
                    <ol className="menu-list">
                        <li><img className="special-icon-bird" src={bird}/></li>
                        <li><img className="menu-icons" src={bird}/>Поиск</li>
                        <li><img className="menu-icons" src={bird}/>Уведомления</li>
                        <li><img className="menu-icons" src={bird}/>Профиль</li>
                        <li><img className="menu-icons" src={bird}/><button>Твитнуть</button></li>
                    </ol>
                </div>
                <div>right data</div>
            </div>
        );
    }
}