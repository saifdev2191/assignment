import React from 'react';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import {Provider} from 'react-redux';
import store from './Store/store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
              <Switch>
                <Route path="/" component={Login} exact/>
                {/* <Route path="/" component={Dashboard} exact/> */}
                <Route path="/dashboard" component={Dashboard}/>
              </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
