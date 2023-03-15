import headerImg from './images/Header/GodfatherHeader.jpg'
import './App.scss';
import Content from './components/Content';
import SlideOut from './components/SlideOut/SlideOut';

function App() {
  return (
    <div className="main">
      <div className="header">
        <img src={headerImg}/>
      </div>
      <SlideOut />
    </div>
  );
}

export default App;
