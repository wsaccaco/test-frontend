import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import Manage from './pages/manage/manage';
import Request from './pages/request/request';
import S from './App.module.css'

function App() {
  return <div className={S.app}>
    <Router>
      <Header title={'DATA GATE'}/>
      <Switch>
        <Route path='/manage' component={Manage}/>
        <Route path='/request' component={Request}/>
        <Route render={() => <h3>please, Select a option</h3>}/>
      </Switch>
    </Router>
  </div>;
}

export default App;
