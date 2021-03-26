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
import MyPage from './screens/MyPage';
import Gender from './screens/Gender';
import axios from 'axios';
import { useEffect } from 'react';
import store from './store';

function App() {
  const loginCheck = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/auth/login`, { withCredentials: true })
      .then(async (result) => await store.dispatch({ type: 'LOGIN', user: result.data.dataValues }));
  };
  useEffect(() => {
    loginCheck();
  }, []);
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
        <Route exact path="/mypage">
          <MyPage />
        </Route>
        <Route exact path="/search/:keyword">
          <Search />
        </Route>
        <Route exact path="/product/gender/:gender">
          <Gender />
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
