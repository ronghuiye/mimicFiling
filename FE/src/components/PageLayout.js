import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  page: {
    backgroundColor: '#ebeef0',
    transition: 'left .3s ease-out',
    flex: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '100vh',
  },
  content: {
    padding: '20px'
  },
};

const PageLayout = ({children, classes}) => {

    return (
      <div className={classes.page}>
        <div className={classes.content}>{children}</div>
      </div>
    );

}

export default withStyles(styles)(PageLayout);
