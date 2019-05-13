import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', {
            callback: () => {
                window.gapi.client.init({
                    clientId: '464632628282-hklg1ip2v94ivg3bi586o0ss15h7g7gg.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
            },
            onerror: function() {
              // Handle loading error.
              alert('gapi.client failed to load!');
            },
            timeout: 5000, // 5 seconds.
            ontimeout: function() {
              // Handle timeout.
              alert('gapi.client could not load in a timely manner!');
            }
          });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut(this.auth.currentUser.get().getId());
        }
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    renderAuthButton = () => {
        if (this.props.isSignedIn === null) {
            return null;
        } else if(this.props.isSignedIn === true) {
            return (
                <button className="ui google plus button" onClick={this.onSignOutClick}>
                  <i className="large google plus icon"></i>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui google plus button" onClick={this.onSignInClick}>
                  <i className="large google plus icon"></i>
                    Sign In
                </button>
            );
        }
    }

    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                {this.renderAuthButton()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn, userId: state.auth.userId};
}

export default connect(mapStateToProps, {
    signIn, signOut
})(GoogleAuth);