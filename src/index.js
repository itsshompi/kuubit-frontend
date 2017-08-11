import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'simple-line-icons/css/simple-line-icons.css'
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

//Authentication
import Auth from './components/Auth/page';
import Login from './components/Auth/login';
import Join from './components/Auth/join';
import Logout from './components/Auth/logout';
import Recovery from './components/Auth/password_recovery';

//
import Home from './components/Home/page';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Auth>
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/recovery" component={Recovery} />
        </Auth>
      </Switch>
    </App>
  </BrowserRouter>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
