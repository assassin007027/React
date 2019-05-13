import React from 'react';
import { connect } from 'react-redux';

class PostList extends React.Component {

    render() {
        if(!this.props.user) return null;
        return this.props.user.name;
    }
}

const mapStateToProps = (state, ownProps) => {
    const user = state.users.find(user => user.id === ownProps.userId);
    return {user: user};
}

export default connect(mapStateToProps)(PostList);