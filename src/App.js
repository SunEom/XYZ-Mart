import './App.css';
import Header from './components/Header';
import { HashRouter, Route } from 'react-router-dom';
import Home from './screens/Home';
import Detail from './screens/Detail';

function App() {
  return (
    <div className="App mb-40">
      <HashRouter>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:id">
          <Detail />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
