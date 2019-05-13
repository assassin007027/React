import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import AlertDialog from '../AlertDialog';
import { deleteStream } from '../../actions'


class StreamDelete extends React.Component {
  
  renderAlertContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with title: ${
      this.props.stream.title
    }`;
  }

  renderalertActions(id) {
    return (
      <React.Fragment>
        <Button onClick={() => this.props.deleteStream(id)} color="primary" autoFocus>
          Delete
        </Button>
        <Button onClick={() => this.props.history.push('/')} color="primary">
          Cancel
        </Button>
      </React.Fragment>
    );
  }

  componentWillMount() {
    const { stream, history } = this.props;
    console.log(stream);

    if(this.props.stream === undefined)
      history.push('/');
  }

  render() {
    const { delId, history } = this.props;

    return (
      <AlertDialog 
        title = "Delete Stream"
        description = {this.renderAlertContent()}
        action = {this.renderalertActions(delId)}
        onDismiss = {() => history.push('/')}
      />
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   console.log(state);
//   return { stream: state.streams[state.delId] };
// }

export default connect(null, {
  deleteStream
})(StreamDelete);