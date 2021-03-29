
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Books from './components/Books'
import MyBooks from './components/MyBooks'
import Profile from './components/Profile'
import Wallet from './components/Wallet'

import Protected from './components/Protected'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';

function App() {
  return (
    <div >

      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/books'>

            <Protected Cmp={Books} />
          </Route>
          <Route path='/mybooks'>
            <Protected Cmp={MyBooks} />
          </Route>
          <Route path='/profile'>
            <Protected Cmp={Profile} />
          </Route>
          <Route path='/wallet'>
            <Protected Cmp={Wallet} />
          </Route>
          <Route path='/search'>
            <Protected Cmp={Search} />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
