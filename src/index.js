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

//Home
import Home from './components/Home/page';

//About
import AboutUs from './components/About/us';
import AboutJobs from './components/About/jobs';
import AboutFaq from './components/About/faq';
import AboutSocial from './components/About/social';
import AboutLegalCookie from './components/About/legal/cookies';
import AboutLegalTerms from './components/About/legal/terms';
import AboutLegalPrivacy from './components/About/legal/privacy';

//Others
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
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
