import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';

const CustomDialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ReturnDialog(props) {

  const { handleClose, open, content } = props

  return (
      <Dialog onClose={handleClose} open={open}>
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            {content}
          </Typography>
        </MuiDialogContent>
        <CustomDialogActions >
          <Button autoFocus onClick={handleClose} color="primary">
            OK
          </Button>
        </CustomDialogActions>
      </Dialog>
  );
}