import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Divider } from '@material-ui/core'

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },

  input: {
    width: "100%",
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },

  divider: {
    marginTop: theme.spacing.unit * 2 ,
    marginBottom: theme.spacing.unit * 2 ,
  },
});

const renderTextField = ({
  label,
  placeholder,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={placeholder}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

class StreamCreate extends React.Component {

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    const { handleSubmit, pristine, reset, submitting, classes, invalid } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="title" component={renderTextField} label="Title" placeholder="Enter the Title" className={classes.input}/>
        <Field name="description" component={renderTextField} label="Description" placeholder="Enter the Description" className={classes.input} />
        <Divider className={classes.divider}/>
        <div>
          <Button type="submit" variant="contained" color="primary" disabled={pristine || submitting || invalid} className={classes.button}>
            Submit
          </Button>
          <Button type="submit" variant="contained" color="primary" disabled={submitting} className={classes.button} onClick={this.props.onCancel}>
            Cancel
          </Button>
          <Button variant="contained" color="secondary" disabled={pristine || submitting} onClick={reset} className={classes.button}>
            Reset
          </Button>
        </div>
      </form>
    );
  }
}

StreamCreate.propTypes = {
  classes: PropTypes.object.isRequired,
};

const enhance = compose(
  withStyles(styles),
  reduxForm({
    form: 'streamCreate', // a unique identifier for this form
    validate
  }),);

export default enhance(StreamCreate);