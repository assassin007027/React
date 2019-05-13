import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { Button, ExpansionPanelDetails, Typography} from '@material-ui/core'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import { withStyles } from '@material-ui/core/styles'
import { fetchStreams } from '../../actions'
import StreamDelete from './StreamDelete';


const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      // borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'white',//'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
      backgroundColor: 'rgba(0, 0, 0, 0.12)'
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {
  },
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const styles = (theme) => ({

  heading: {
    fontSize: theme.typography.pxToRem(25),
  },
  
  description: {
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.text.secondary,
  },

  button: {
    margin: theme.spacing.unit,
  },

  createbutton: {
    marginLeft: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 6,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  }
});

class StreamList extends React.Component {
  state = {
    expanded: "panel1"
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  componentDidMount() {
    this.props.fetchStreams();
  };

  renderCreateButton = () => {
    const { classes, isSignedIn, history } = this.props;
    if(isSignedIn)
      return (
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button variant="contained" onClick={() => {history.push("/streams/new")}} className={classes.createbutton}>
            <i className="large plus icon"></i>
            Create Stream
          </Button>
        </div>
      );
    return null;
  }

  renderButtons = (userId, id) => {
    const { classes, currentUserId, history } = this.props;
    if(currentUserId === userId)
      return (
        <ExpansionPanelActions>
          <Button variant="contained" className={classes.button} onClick={() => {history.push(`/streams/${id}`)}}>
            <i className="large play icon"></i>
            Play
          </Button>
          <Button variant="contained" onClick={() => {history.push(`/streams/edit/${id}`)}} className={classes.button}>
            <i className="large edit icon"></i>
            Edit
          </Button>
          <Button variant="contained" onClick={() => {history.push(`/streams/delete/${id}`)}} className={classes.button}>
            <i className="large trash alternate icon"></i>
            Delete
          </Button>
        </ExpansionPanelActions>
      );
    return (
      <ExpansionPanelActions>
        <Button variant="contained" className={classes.button} onClick={() => {history.push(`/streams/${id}`)}}>
          <i className="large play icon"></i>
          Play
        </Button>
      </ExpansionPanelActions>
    );
  };

  renderList = () => {
    const { expanded } = this.state;
    const { classes, streams } = this.props;

    return (streams.map((stream, id) => {
      return (
        <ExpansionPanel square expanded={expanded === `panel${stream.id}`} onChange={this.handleChange(`panel${stream.id}`)} key={stream.id}>
          <ExpansionPanelSummary>
            <i className="big camera icon"></i>
            <Typography className={classes.heading}>{stream.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.description}>{stream.description}</Typography>
          </ExpansionPanelDetails>
          {this.renderButtons(stream.userId, stream.id)}
        </ExpansionPanel>
      );
    }));
  }

  render() {
    const { delId, history, streams } = this.props;

    return (
      <div>
        {this.renderList()}
        {this.renderCreateButton()}
        {delId === undefined ? null : <StreamDelete delId = {delId} history = {history} stream={streams[delId]}/>}
      </div>
    );
  }
}

StreamList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return { streams: Object.values(state.streams), currentUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn, delId: ownProps.match.params.id };
}

const enhance = compose(
  withStyles(styles),
  connect(mapStateToProps, {
    fetchStreams
  }),);

export default enhance(StreamList);