import jsonPlaceholder from '../apis'
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(userId => dispatch(fetchUser(userId)));

    // _.chain(getState().posts)
    //     .map('userId')
    //     .uniq()
    //     .forEach(id => dispatch(fetchUser(id)))
    //     .value();
}

export const fetchPosts = () => async (dispatch) => {
    const posts = await jsonPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: posts.data
    });
};

export const fetchUser = (userId) => async (dispatch) =>  {
    const users = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({
        type: 'FETCH_USER',
        payload: users.data
    });
};