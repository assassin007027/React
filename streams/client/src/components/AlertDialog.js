import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {

  render() {
    const { title, description, action} = this.props;

    return (
      <div>
        <Dialog
          open = {true}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          onClose={this.props.onDismiss}
        >
          <DialogTitle id="alert-dialog-title"> {title} </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"> {description} </DialogContentText>
          </DialogContent>
          <DialogActions> {action} </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;