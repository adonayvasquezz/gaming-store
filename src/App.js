import { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Detail from './pages/Detail';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <BrowserRouter>
        <Navbar />
      <Switch>
        <Route path='/' component={ Home } exact />
        {!authCtx.isLoggedIn && <Route path='/auth' component={ Auth } />} 
        {/* {authCtx.isLoggedIn && <Route path='/detail' component={ Detail } />}  */}
        <Route path='/detail'>
          {authCtx.isLoggedIn && <Detail />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />} 
        </Route>
       
        <Route component={ PageNotFound } />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
