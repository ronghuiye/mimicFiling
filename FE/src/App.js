import React from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import routes from './routes'
import { Settings, List } from '@material-ui/icons';

import GlobalLayout from './components/GlobalLayout'
import CalendarList from './containers/calendar/calendarContainer'
import PageLayout from './components/PageLayout'
import ReturnList from './containers/return/returnContainer'

class App extends React.Component {

  getNavProps = () => {
    let navProps = {
      links: [{
        label: 'Returns',
        icon: List,
        action: () => this.props.history.push(routes.returns)
      }, {
        label: 'Filing Calendar',
        icon: Settings,
        action: () => this.props.history.push(routes.calendars)
      }]
    }
    return navProps
  }

  render() {
    return (
      <GlobalLayout NavigationProps={this.getNavProps()}>
        <div className="App" style={{width:'inherit'}}>
          <PageLayout>
            <Switch>
              <Route path={routes.returns} component={ReturnList} />
              <Route path={routes.calendars} component={CalendarList} />
              <Route render={() => <Redirect to={routes.returns}/>} />
            </Switch>
          </PageLayout>
        </div>
      </GlobalLayout>
    );
  }

}

export default withRouter(App);
