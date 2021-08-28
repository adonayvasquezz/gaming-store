import { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Search from './pages/Search';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <BrowserRouter>
        <Navbar />
      <Switch>
        <Route path='/' component={ Home } exact />
        
        {!authCtx.isLoggedIn && <Route path='/auth' component={ Auth } />} 

        <Route path='/detail'>
          {authCtx.isLoggedIn && <Detail />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />} 
        </Route>

        <Route path='/search'>
          {authCtx.isLoggedIn && <Search />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />} 
        </Route>

        <Route path='/favorites'>
          {authCtx.isLoggedIn && <Favorites />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />} 
        </Route>
       
        <Route component={ PageNotFound } />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
