import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import Myline from './components/Myline/Myline';
import SpecialChat from './components/SpecialChat/SpecialChat';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Pricing></Pricing>
     <Myline></Myline>
     <SpecialChat></SpecialChat>
    </div>
  );
}

export default App;
