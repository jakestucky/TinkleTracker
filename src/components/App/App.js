import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoPage from '../InfoPage/InfoPage';
import Landing from '../Landing/Landing';
import './App.css';
import ChildInfo from '../ChildInfo/ChildInfo';
import NewEvent from '../NewEvent/NewEvent';
import ChildView from '../ChildView/ChildView';
import RecentEvent from '../RecentEvent/RecentEvent';
import Goal from '../Goal/Goal';
import EditEvent from '../EditEvent/EditEvent';
import NewChild from '../ChildInfo/NewChild';
import HeaderLogin from '../Header/HeaderLogin';
import HeaderLogout from '../Header/HeaderLogout';
import NewGoal from '../Goal/NewGoal';
class App extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_USER',
    });
  }

  render() {
    let isLoggedIn = this.props.child.name;
    return (
      <Router>
        <div>
          {isLoggedIn ? <HeaderLogin /> : <HeaderLogout />}
          <Nav />

          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from='/' to='/home' />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute exact path='/home' component={Landing} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute exact path='/info' component={InfoPage} />
            <ProtectedRoute exact path='/childinfo' component={ChildInfo} />
            <ProtectedRoute exact path='/newevent' component={NewEvent} />
            <ProtectedRoute exact path='/childview' component={ChildView} />
            <ProtectedRoute exact path='/recentevent' component={RecentEvent} />
            <ProtectedRoute exact path='/newchild' component={NewChild} />
            <ProtectedRoute exact path='/goal' component={Goal} />
            <ProtectedRoute exact path='/newgoal' component={NewGoal} />
            <ProtectedRoute
              exact
              path='/event/edit/:id'
              component={EditEvent}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  child: state.childReducer,
  login: state.loginMode,
});

export default connect(mapStateToProps)(App);
