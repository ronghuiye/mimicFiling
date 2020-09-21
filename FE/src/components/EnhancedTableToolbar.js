import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
  btn: {
    paddingLeft: theme.spacing(2)
  }
}));

export default function EnhancedTableToolbar(props) {
  const classes = useToolbarStyles();
  const { selected, title, addOnClick, deleteOnClick, doubleBtn } = props;
  const numSelected = selected.length

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          {title}
        </Typography>
      )}

      {!doubleBtn ? (numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={deleteOnClick}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Add">
          <Button variant="contained" onClick={addOnClick} >ADD</Button>
        </Tooltip>
      ) ) : (numSelected > 0 ? (
        <>
        <Tooltip title="Rollback">
          <Button variant="contained" onClick={deleteOnClick}>ROLLBACK</Button>
        </Tooltip>
        <div className={classes.btn} />
        <Tooltip title="Advance">
          <Button variant="contained" onClick={addOnClick}>ADVANCE</Button>
        </Tooltip>
        </>
      ) : '')}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  selected: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  doubleBtn : PropTypes.bool.isRequired
};