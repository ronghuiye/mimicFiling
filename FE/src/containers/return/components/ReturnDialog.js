import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import MuiDialogActions from '@material-ui/core/DialogActions';

export default function ReturnDialog(props) {

  const { handleClose, open, content } = props

  return (
      <Dialog onClose={handleClose} open={open}>
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            {content}
          </Typography>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            OK
          </Button>
        </MuiDialogActions>
      </Dialog>
  );
}