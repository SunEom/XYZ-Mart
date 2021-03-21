import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter, Route } from 'react-router-dom';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Login from './screens/Login';
import Join from './screens/Join';
import Cart from './screens/Cart';
import Search from './screens/Search';

function App() {
  return (
    <div className="App mb-40">
      <HashRouter>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/join">
          <Join />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/search/:keyword">
          <Search />
        </Route>
        <Route exact path="/product/:id">
          <Detail />
        </Route>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
