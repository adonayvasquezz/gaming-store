import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path='/' component={ Home } exact />
        <Route path='/Auth' component={ Auth } />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
