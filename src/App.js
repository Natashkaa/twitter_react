import logo from './logo.svg';
import './styles/main.css';
import people from './icons/people.png';
import search from './icons/search.png';
import cloud from './icons/cloud.png';

function App() {
  return (
    <div className="App container-fluid m-0 p-0">
      <div className="firstRow row no-gutters">
        <div className="birdSide">
          <div className="text">
            <ul className="simpleList">
              <li><img className="icons" src={search}/> Читайте о том, что вам интересно.</li>
              <li><img className="icons" src={people}/> Узнайте, о чем говорят в мире.</li>
              <li><img className="icons" src={cloud}/> Присоединяйтесь к общению.</li>
            </ul>
          </div>
          

        </div>
        <div className="darkSide">
          darek
        </div>
      </div>
      <div className="secondRow row no-gutters">
        here will be a lot of links
      </div>
    </div>
  );
}

export default App;
