import '../styles/main.css';
import '../styles/modal.css';
import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import people from '../icons/people.png';
import search from '../icons/search.png';
import cloud from '../icons/cloud.png';
import bird from  '../icons/bird.png';
import Modal from "./modal";
import SelectDay from "../Components/selectDay";

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

export default class App extends Component {
  constructor(props){
    super(props);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.state = { 
      Full_Name: "",
      User_Login: "",
      Birth_Month: "january",
      Birth_Day: "1",
      Birth_Year: "1901",
      User_Password: ""
    }
  }
 
  handleMonthChange = event => {
    this.setState({ Birth_Month: event.target.value});
    if(LongMonths[event.target.value] < parseInt(this.state.Birth_Day)){
      this.setState({ Birth_Day: 1});
    }
  }
  handleDayChange = event => {
    this.setState({ Birth_Day: event.target.value});
  }
  handleYearChange = event => {
    this.setState({ Birth_Year: event.target.value});
    console.log(parseInt(event.target.value) % 4);
    if(!parseInt(event.target.value) % 4 && this.state.Birth_Month == " february"){
      this.setState({ Birth_Day: 1});
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
                    <Link style={{color: "white"}} to={`${this.props.match.url}/edit`}>Зарегистрироваться</Link>
                    <Route
                      path={`${this.props.match.url}/edit`}
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
                                        <div className="div-name-length">0/50</div>
                                      </div>
                                      <input className="input-name" type="text" maxLength="50"></input>
                                    </div>
                                  </div>
                                  <div className="user-email">
                                    <div className="shell">
                                      <div className="shell-row1">
                                        <div className="div-email">Email</div>
                                      </div>
                                      <input className="input-email" maxLength="70"></input>
                                    </div>
                                  </div>
                                  <div className="modal-text2">Дата рождения</div>
                                  <div className="modal-text3">Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная запись предназначена для компании, домашнего животного и т. д.</div>
                                  
                                  <div className="birth-container">
                                    <div className="user-birth-month">
                                      <div className="shell">
                                        <div className="shell-row1">
                                          <div className="div-name">Месяц</div>
                                        </div>
                                        <select id="Birth_Month" className="input-birth-month" value={this.state.Birth_Month} onChange={this.handleMonthChange}>
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
                                        <SelectDay onDayChange={this.handleDayChange} selectedMonth={this.state.Birth_Month} selectedDay={this.state.Birth_Day} selectedYear={this.state.Birth_Year}/>
                                      </div>
                                    </div>

                                    <div className="user-birth-year">
                                      <div className="shell">
                                        <div className="shell-row1">
                                          <div className="div-name">Год</div>
                                        </div>
                                        <select id="Birth_Year" className="input-birth-year" value={this.state.Birth_Year} onChange={this.handleYearChange}>
                                          <option value="1901">1901</option><option value="1902">1902</option><option value="1903">1903</option>
                                          <option value="1904">1904</option>
                                        </select>
                                      </div>
                                    </div>

                                  </div>
                                  
                                </div>
                                
                                
                              <button className="btn-next" onClick={() => { this.props.history.push(this.props.match.url) }}>Назад</button>
                            </div>
                          </Modal>
                        );
                      }}
                    />
                  </button>
                </div>
                <div className="btn-block"><button className="btn-logIn">Войти</button></div>
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