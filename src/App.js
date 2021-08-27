import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Detail from './pages/Detail';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Switch>
        <Route path='/' component={ Home } exact />
        <Route path='/auth' component={ Auth } />
        <Route path='/detail' component={ Detail } />
        <Route component={ PageNotFound } />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
