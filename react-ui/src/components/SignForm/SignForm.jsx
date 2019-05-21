import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Segment, Icon, Message, Container } from 'semantic-ui-react'

import logo from '../../logo.png';
import { userActions } from '../../actions';
import './SignForm.css';

class SignForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
                account: '',
                termsofservice: ''
            },
            submitted: false,
            isRegister: false
        };
    }

    handleChange = (e, { name, value }) => {
        const { user } = this.state;
        if (name === 'termsofservice') {
            this.setState({
                user: {
                    ...user,
                    termsofservice: user.termsofservice ? '' : 'true'
                }
            });
        } else {
            this.setState({
                user: {
                    ...user,
                    [name]: value
                }
            });
        }
    }

    registerHandleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.email && user.account && user.termsofservice) {
            dispatch(userActions.register({ email: user.email, account: user.account }));
        }
    }

    loginHandleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        console.log("asdfasdfasdfasdf", user);
        if (user.email && user.password) {
            console.log("asdfasdf");
            dispatch(userActions.login(user.email, user.password));
        }
    }

    loginForm = () => {
        const { loggingIn, alert, registersuccess } = this.props;
        if (this.state.submitted && registersuccess)
            this.setState({ submitted: false });
        const { email, password, submitted } = this.state;
        return (
            <div className='login-form'>
                <style>
                    {`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form,
                    body > div > div > div.login-form > div.grid {
                        height: 100%;
                    }
                `}
                </style>
                <Grid textAlign='center' verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 400 }} textAlign='left'>
                        <Image src={logo} centered size='tiny' />
                        <Header as='h2' textAlign='center'>Please sign in</Header>
                        <Form size='large' onSubmit={this.loginHandleSubmit} className={`${alert.type}`} >
                            {
                                alert.message &&
                                <Message className={`${alert.type}`}>{alert.message}</Message>
                            }
                            <Segment stacked>
                                <Form.Input fluid type='email' name='email' placeholder='your@email' iconPosition='left' onChange={this.handleChange} error={submitted && !email}>
                                    <Icon name='mail' />
                                    <input />
                                </Form.Input>
                                <Form.Input fluid type='password' name='password' icon='lock' iconPosition='left' placeholder='password' onChange={this.handleChange} error={submitted && !password} />
                                <Form.Field align='right'> <Link to='#'>Forgot your password?</Link> </Form.Field>
                                <Form.Field> <Button type="submit" color='teal' fluid size='large' loading={loggingIn} > Login </Button> </Form.Field>
                                <Form.Field> <Link to='#' onClick={() => { this.setState({ isRegister: true, submitted: false }) }}>Not a member yet? Sign up</Link> </Form.Field>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }

    registerForm = () => {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className='login-form'>
                <style>
                    {`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                        height: 100%;
                    }
                    body > div > div > div.login-form > div.grid {
                        height: calc(100% - 100px);
                    }
                `}
                </style>
                <Grid textAlign='center' verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 700 }} textAlign='left'>
                        <Header as='h1' style={{ fontSize: '3rem' }}> Make $X,XXX/mo through selling from Your City </Header>
                        <Header as='h2'> Sign up to sell </Header>
                        <Form onSubmit={this.registerHandleSubmit} className={`${alert.type}`} >
                            {
                                alert.message &&
                                <Message className={`${alert.type}`}>{alert.message}</Message>
                            }
                            <Form.Group widths='equal'>
                                <Form.Radio
                                    label='I have account'
                                    value='haveaccount'
                                    name='account'
                                    checked={user.account === 'haveaccount'}
                                    onChange={this.handleChange}
                                    error={submitted && !user.account}
                                />
                                <Form.Radio
                                    label='I need to open an account'
                                    value='needaccount'
                                    name='account'
                                    checked={user.account === 'needaccount'}
                                    onChange={this.handleChange}
                                    error={submitted && !user.account}
                                />
                            </Form.Group>
                            <Form.Group widths='equal' style={{ textAlign: 'center' }}>
                                <Form.Input fluid type='email' name='email' placeholder='your@email' iconPosition='left' onChange={this.handleChange} error={submitted && !user.email}>
                                    <Icon name='mail' />
                                    <input />
                                </Form.Input>
                                <Form.Checkbox name='termsofservice' label={<label>I agree to <Link to='#'>Terms of Service</Link></label>} onChange={this.handleChange} error={submitted && !user.termsofservice} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Button type="submit" fluid primary className={(registering ? ' loading' : '')} width={8}>Register</Form.Button>
                            </Form.Group>
                            <div>Already have an account with us?</div>
                            <Link to='#' onClick={() => { this.setState({ isRegister: false, submitted: false }) }}>Login here</Link>
                        </Form>
                    </Grid.Column>
                </Grid >
                <Segment inverted>
                    <Container>
                        <Segment inverted>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header as="h1" inverted style={{ fontSize: 50 }}>$</Header>
                                    </Grid.Column>
                                    <Grid.Column width={10}>
                                        <Header as="h3" inverted style={{ marginBottom: 0 }}>Make $X,XXX________guaranteed</Header>
                                        <Link to="#" as="h3">Learn More<Icon bordered name="angle right"/></Link>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Container>
                </Segment>
            </div>
        );
    }

    render() {
        const { isRegister } = this.state;
        const { registersuccess } = this.props;
        if (!registersuccess && isRegister)
            return this.registerForm();
        return this.loginForm();
    }
}

function mapStateToProps(state) {
    const { registering, registersuccess } = state.registration;
    const { loggingIn } = state.authentication;
    const { alert } = state;
    return {
        loggingIn,
        registering,
        registersuccess,
        alert
    };
}

const connectedSignForm = connect(mapStateToProps)(SignForm);
export { connectedSignForm as SignForm };