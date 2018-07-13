import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Auth from './auth';
import configureStore from './state/store';

import Header from './views/common/Header';
import Content from './views/common/Content';
import Sidebar from './views/Sidebar/Sidebar';
import Footer from './views/Footer/Footer';

import Overview from './views/Overview';
import Status from './views/Status';
import Plugins from './views/Plugins';
import Fakechat from './views/Fakechat';
import Profile from './views/Profile/Profile';
import Commands from './views/Commands/Commands';
import Songrequests from './views/Songrequests/Songrequests';
import DevTools from './views/DevTools/DevTools';

import Welcome from './views/Welcome/Welcome';

import LanguageProvider from './translations/LanguageProvider';

import './styles/main.css';

const App = () => {
  const store = configureStore();

  return (
    <LanguageProvider>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Auth>
            <MuiThemeProvider>
              <Content>
                <Header />
                <Welcome>
                  <div style={{ float: 'left' }}>
                    <Sidebar />
                  </div>
                  <div className="content">
                    <Switch>
                      <Route path="/" exact component={Overview} />
                      <Route path="/status" exact component={Status} />
                      <Route path="/plugins" exact component={Plugins} />
                      <Route path="/fakechat" exact component={Fakechat} />
                      <Route path="/profile" exact component={Profile} />
                      <Route path="/commands" exact component={Commands} />
                      <Route path="/dev" exact component={DevTools} />
                      <Route
                        path="/songrequests"
                        exact
                        component={Songrequests}
                      />
                    </Switch>
                  </div>
                  <div style={{ clear: 'both' }} />
                </Welcome>
                <Footer />
              </Content>
            </MuiThemeProvider>
          </Auth>
        </BrowserRouter>
      </ReduxProvider>
    </LanguageProvider>
  );
};

export default App;
