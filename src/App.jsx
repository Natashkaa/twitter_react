import logo from './logo.svg';
import './styles/main.css';
import people from './icons/people.png';
import search from './icons/search.png';
import cloud from './icons/cloud.png';
import bird from  './icons/bird.png'

function App() {
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
              <div className="btn-block"><button className="btn-signIn">Зарегистрироваться</button></div>
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

export default App;
