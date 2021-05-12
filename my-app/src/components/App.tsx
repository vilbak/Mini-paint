import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Register from './Registter';
import Login from './Login';
import Main from './Main';
import Canvas from './Main/Paint/Canvas';
import PaintEdit from './Main/Paint/PaintEdit';
import PrivateRoute  from './PrivateRoute';

const App: React.FC = () => {



  return (
    <Router>
      <Switch>
        <Redirect from={'/'} to={'/register'} exact />

        <Route path={'/main'} component={Main} />
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
        <Route path={'/paint'} component={Canvas} />
        <Route path="/edit/:id" component={PaintEdit} />
        {/*<PrivateRoute path="/add" component={TaskAddNotes} />*/}
        {/*<PrivateRoute path={'/task'} />*/}
      </Switch>
    </Router>
  );
};

export default App;
