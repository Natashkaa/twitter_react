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
import Test_Icon from "../icons/ana.jpg";
import LogOut from "../icons/log_out_ic.png";
import TestBcg from "../images/test_background.jpg";

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
                        <li className="logout-li">
                            <div className="lil-image-container"><img className="lil-prof-icon" src={Test_Icon} alt="profile icon"/></div>
                            <div className="lil-info-container">
                                <div className="username-info">USER NAME</div>
                                <div className="userlogin-info">@kek_lalala</div>
                            </div>
                            <div className="lil-image-container">
                                <button className="btn-logout" title="log out"><img className="menu-icons" src={LogOut} alt="profile icon"/></button>
                                </div>
                        </li>
                    </ol>
                    {/* <div className="left-user-info">
                        <img className="menu-icons" src={Home}/>
                        <div>USER NAME</div>
                        <div>USER LOGIN</div>
                    </div> */}
                </div>
                <div className="right-block">
                    <div className="top-fix-header">
                        <button className="btn-go-top">USER NAME</button>
                        <div className="tweet-amount">1 000 твитов</div>
                    </div>
                    <div className="right-block-body">
                        <div className="user-background-block">
                            <img className="user-background" src={TestBcg} title="your background"/>
                        </div>
                        <div className="user-data-block container-fluid m-0 p-0">
                            <div className="row flex-row no-gutters first-row">
                                <img className="user-prof-icon" src={Test_Icon}/>
                                <input className="btn-edit-profile" type="button" value="Изменить профиль"></input>
                            </div>
                            <div>SDFSDFSDFSDFSDFSD</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}