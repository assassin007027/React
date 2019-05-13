import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {


    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    render() {
        const item = this.props.posts.map(post => {

            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned user icon" />
                    <div className="content">
                        <h3 className="header">{post.title}</h3>
                        <div className="description">{post.body}</div>
                        <div className="extra"><UserHeader userId={post.userId}/></div>
                    </div>
                </div>
            );
        });


        return (
            <div className="ui segment">
                <div className="ui relaxed divied list">
                    {item}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts};
}

export default connect(
    mapStateToProps, {
        fetchPostsAndUsers,
    }
)(PostList);