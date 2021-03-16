import './App.css';
import Header from './components/Header';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
      </HashRouter>
    </div>
  );
}

export default App;
