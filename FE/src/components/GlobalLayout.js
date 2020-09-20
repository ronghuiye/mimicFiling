import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Navigation from './Navigation'

const styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    width: ({width}) => width || '100vw',
  },
};

const GlobalLayout = ({children, NavigationProps, classes}) => {

  const renderNavigation = () => <Navigation {...NavigationProps}/>;

  return (
    <div className="GlobalLayout">
      <div className={classes.wrapper}>
        {renderNavigation()}
        {children}
      </div>
    </div>
  );
};

export default withStyles(styles)(GlobalLayout);
