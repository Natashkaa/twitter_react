import '../styles/main.css';
import '../styles/modal.css';
import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import people from '../icons/people.png';
import search from '../icons/search.png';
import cloud from '../icons/cloud.png';
import bird from  '../icons/bird.png';
import Modal from "./modal";
import SelectBirthday from "../Components/SelectBirthday";

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

export default class App extends Component {
  constructor(props){
    super(props);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = { 
      Full_Name: "",
      User_Login: "",

      Birth_Month: "4",
      Birth_Day: "2",
      Birth_Year: new Date().getFullYear(),
      User_Password: "",
      NameLengthCount: 0,
      LoginLengthCount: 0
    }
  }
  handleNameChange = event => {
    this.setState({ Full_Name: event.target.value, NameLengthCount: event.target.value.length })
    console.log("NAME IS " + this.state.Full_Name + " LENGTH IS " + this.state.Full_Name.length + " COUNT IS " + this.state.NameLengthCount);
  }
  handleLoginChange = event => {
    this.setState({ User_Login: event.target.value, LoginLengthCount: event.target.value.length });
  }
  handlePasswordChange = event => {
    this.setState({ User_Password: event.target.value});
  }
 
  handleMonthChange = event => {
    this.setState({ Birth_Month: event.target.value});
    if(LongMonths[event.target.value] < parseInt(this.state.Birth_Day)){
      this.setState({ Birth_Day: "1"});
    }
  }
  handleDayChange = event => {
    this.setState({ Birth_Day: event.target.value});
  }
  handleYearChange = event => {
    this.setState({ Birth_Year: event.target.value});
    console.log(parseInt(event.target.value) % 4);
    if(parseInt(event.target.value) % 4 != 0 && this.state.Birth_Month == "2"){
      this.setState({ Birth_Day: "1"});
    }
  }
  render() {
    console.log('current date ' + this.state.Birth_Month + " " + this.state.Birth_Day + " " + this.state.Birth_Year);
    return (
      <div className="App container-fluid m-0 p-0">
        <div className="first-row row flex-row no-gutters">
          <div className="bird-side col-sm-12 col-md-12 col-lg-6">
            <div className="text">
              <ul className="simple-list">
                <li><img className="icons" src={search}/> Читайте о том, что вам интересно.</li>
                <li><img className="icons" src={people}/> Узнайте, о чем говорят в мире.</li>
                <li><img className="icons" src={cloud}/> Присоединяйтесь к общению.</li>
              </ul>
            </div>
          </div>
          <div className="dark-side col-sm-12 col-md-12 col-lg-6">
            <div className="dark-side-content">
                <div className="bird-icon d-block"><img className="bird" src={bird}/></div>
                <div className="phrase1">Узнайте, что происходит в мире прямо сейчас</div>
                <div className="phrase2">Присоединяйтесь к Твиттеру прямо сейчас!</div>
                <div className="btn-block">
                  <button className="btn-signIn">
                    <Link style={{color: "white"}} to={`${this.props.match.url}/SignIn`}>Зарегистрироваться</Link>
                    <Route
                      path={`${this.props.match.url}/SignIn`}
                      render={() => {
                        return (
                          <Modal
                            onClick={() => {
                              this.props.history.push(this.props.match.url);
                            }}>
                            <div className="modal">
                                <div className="modal-head">
                                  <div className="bird-container"><img className="bird" src={bird}/></div>
                                  <button className="btn-next">Далее</button>
                                </div>
                                <div className="modal-body">
                                  <div className="modal-text1">Создайте свою учетную запись</div>
                                  <div className="user-name">
                                    <div className="shell">
                                      <div className="shell-row1">
                                        <div className="div-name">Имя</div>
                                        <div className="div-name-length">{this.state.NameLengthCount}/50</div>
                                      </div>
                                      <input id="Full_Name" name="Full_Name" className="input-name" type="text" maxLength="50" onChange={this.handleNameChange} value={this.state.Full_Name}></input>
                                    </div>
                                  </div>
                                  <div className="user-name">
                                    <div className="shell">
                                      <div className="shell-row1">
                                        <div className="div-name">Логин</div>
                                        <div className="div-name-length">{this.state.LoginLengthCount}/50</div>
                                      </div>
                                      <input id="User_Login" name="User_Login" className="input-name" type="text" maxLength="50" onChange={this.handleLoginChange} value={this.state.User_Login}></input>
                                    </div>
                                  </div>
                                  <div className="user-email">
                                    <div className="shell">
                                      <div className="shell-row1">
                                        <div className="div-email">Email</div>
                                      </div>
                                      <input className="input-email" type="text" maxLength="70"></input>
                                    </div>
                                  </div>
                                  <div className="user-name">
                                    <div className="shell">
                                      <div className="shell-row1">
                                        <div className="div-name">Пароль</div>
                                      </div>
                                      <input id="User_Password" name="User_Password" className="input-name" type="password" maxLength="50" onChange={this.handlePasswordChange} value={this.state.User_Password}></input>
                                    </div>
                                  </div>
                                  <div className="modal-text2">Дата рождения</div>
                                  <div className="modal-text3">Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная запись предназначена для компании, домашнего животного и т. д.</div>
                                  
                                  <SelectBirthday onMonthChange={this.handleMonthChange} onDayChange={this.handleDayChange} onYearChange={this.handleYearChange}
                                                  selectedMonth={this.state.Birth_Month} selectedDay={this.state.Birth_Day} selectedYear={this.state.Birth_Year}/>
                                </div>
                                
                              <button className="btn-next" onClick={() => { this.props.history.push(this.props.match.url) }}>Назад</button>
                            </div>
                          </Modal>
                        );
                      }}
                    />
                  </button>
                </div>
                <div className="btn-block">
                  <Link className="btn-logIn" to='/logIn'>
                    <span>Войти</span>
                  </Link>
                </div>
            </div>
          </div>
        </div>
        <div className="secondRow row no-gutters">
          <a href="https://about.twitter.com/ru.html" target="_blank">О нас</a>
          <a href="https://help.twitter.com/" target="_blank">Справочный центр</a>
          <a href="https://twitter.com/tos" target="_blank">Условия предоставления услуг</a>
          <a href="https://twitter.com/privacy" target="_blank">Политика конфиденциальности</a>
          <a href="https://support.twitter.com/articles/20170514" target="_blank">Политика в отношении файлов cookie</a>
          <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html" target="_blank">Информация о рекламе</a>
          <a href="https://blog.twitter.com/" target="_blank">Блог</a>
          <a href="https://status.twitterstat.us/" target="_blank">Статус</a>
          <a href="https://careers.twitter.com/" target="_blank">Работа</a>
          <a href="https://about.twitter.com/press/brand-assets" target="_blank">Ресурсы бренда</a>
          <a href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise" target="_blank">Реклама</a>
          <a href="https://marketing.twitter.com/" target="_blank">Маркетинг</a>
          <a href="https://business.twitter.com/" target="_blank">Твиттер для бизнеса</a>
          <a href="https://developer.twitter.com/" target="_blank">Разработчикам</a>
          <a href="https://twitter.com/i/directory/profiles" target="_blank">Каталог</a>
          <a href="https://twitter.com/settings" target="_blank">Настройки</a>
          <a>© Twitter, Inc., 2020.</a>
        </div>
      </div>
    );
  }
}