import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import '../styles/user_page.css';
import bird from  '../icons/bird.png';
import Home from "../icons/home_ic.png";
import Search from "../icons/search_ic.png";
import Notif from "../icons/notif_ic.png";
import Message from "../icons/message_ic.png";
import Profile from "../icons/profile_ic.png";
import New_Tweet from "../icons/tweet_ic.png";

export default class User_Page extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="main-block">
                <div className="left-menu-block">
                    <ol className="menu-list">
                        <li><a href="#"><img className="special-icon-bird" src={bird}/></a></li>
                        <li><div className="lis-content"><img className="menu-icons" src={Home}/><a href="https://www.instagram.com/" target="_blank" className="li-name">Главная</a></div></li>
                        <li><div className="lis-content"><img className="menu-icons" src={Search}/><a href="#" className="li-name">Поиск</a></div></li>
                        <li><div className="lis-content"><img className="menu-icons" src={Notif}/><a href="#" className="li-name">Уведомления</a></div></li>
                        <li><div className="lis-content"><img className="menu-icons" src={Message}/><a href="#" className="li-name">Сообщения</a></div></li>
                        <li><div className="lis-content"><img className="menu-icons" src={Profile}/><a href="#" className="li-name">Профиль</a></div></li>
                        <li><button className="new-tweet-btn"><img className="menu-icons new-tweet-icon" src={New_Tweet}/>Твитнуть</button></li>
                    </ol>
                </div>
                <div>right data <a href="#">LINK</a></div>
            </div>
        );
    }
}