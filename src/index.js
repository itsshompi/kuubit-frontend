import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

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

//Home
import Home from './components/Home/page';

//User
import UserProfile from './components/User/Profile/page';

//User Settings
import Settings from './components/User/Settings/page';
import SettingsProfile from './components/User/Settings/profile';
import SettingsAccount from './components/User/Settings/account';
import SettingsEmail from './components/User/Settings/email';
import SettingsPayments from './components/User/Settings/payments';

//About
import AboutUs from './components/About/us';
import AboutJobs from './components/About/jobs';
import AboutFaq from './components/About/faq';
import AboutSocial from './components/About/social';
import AboutLegalCookie from './components/About/legal/cookies';
import AboutLegalTerms from './components/About/legal/terms';
import AboutLegalPrivacy from './components/About/legal/privacy';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const Root = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about/us" component={AboutUs} />
          <Route exact path="/about/jobs" component={AboutJobs} />
          <Route exact path="/about/faq" component={AboutFaq} />
          <Route exact path="/about/social" component={AboutSocial} />
          <Route exact path="/about/legal/cookies" component={AboutLegalCookie} />
          <Route exact path="/about/legal/terms" component={AboutLegalTerms} />
          <Route exact path="/about/legal/privacy" component={AboutLegalPrivacy} />
          <Route exact path="/profile" component={UserProfile} />
          <Route path="/settings" component={Settings}>
              <Route path="/settings/profile" component={SettingsProfile} />
              <Route path="/settings/account" component={SettingsAccount} />
              <Route path="/settings/email" component={SettingsEmail} />
              <Route path="/settings/payments" component={SettingsPayments} />
          </Route>
          <Auth>
            <Route exact path="/login" component={Login} />
            <Route exact path="/join" component={Join} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/recovery" component={Recovery} />
          </Auth>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
