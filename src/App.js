import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import Myline from './components/Myline/Myline';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Pricing></Pricing>
     <Myline></Myline>
    </div>
  );
}

export default App;
