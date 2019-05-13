// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
import Message from './Message';

// Create a react component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <Message header="Warning!" text="Are you sure you want to do this?"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    avatar={faker.image.avatar()}
                    timeAgo="Today at 4:45PM"
                    detailText="Nice blog post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    avatar={faker.image.avatar()}
                    timeAgo="Today at 2:00AM"
                    detailText="Good blog post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    avatar={faker.image.avatar()}
                    timeAgo="Yesterday at 5:00PM"
                    detailText="Bad blog post!"
                />
            </ApprovalCard>
        </div>
    );
}
//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);