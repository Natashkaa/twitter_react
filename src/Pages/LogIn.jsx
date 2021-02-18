import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "../styles/logIn.css"
import bird from  '../icons/bird.png';


export default class LogIn extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            User_Login: "",
            User_Password: ""
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render(){
        return(
            <div className="main-container">
                <div className="sec-container">
                    <div className="bird-icon d-block"><img className="bird" src={bird}/></div>
                    <div className="text1 d-block">Войти в Твиттер</div>
                    <form>
                        <div className="form-group">
                            <div className="user-email-log">
                                <div className="shell-log">
                                    <div className="shell-log-row1">
                                        <div className="div-email">Имя или номер телефона</div>
                                    </div>
                                    <input id="User_Login" name="User_Login"  
                                        className="input-email" maxLength="70"
                                        value={this.state.User_Login}
                                        onChange={this.handleChange}></input>
                                </div>
                            </div>
                            <div className="user-name-log">
                                <div className="shell-log">
                                    <div className="shell-log-row1">
                                        <div className="div-name">Пароль</div>
                                    </div>
                                    <input id="User_Password" name="User_Password" 
                                           className="input-name" type="password" maxLength="50"
                                           value={this.state.User_Password}
                                           onChange={this.handleChange}></input>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn-log-in">Далее</button>
                    </form>
                    <Link style={{color: "white"}} to={`/main/SignIn`}>Зарегистрироваться в Твиттере</Link>
                </div>
            </div>
        )
    }
}