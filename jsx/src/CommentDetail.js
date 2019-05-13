import React from "react";

const CommentDetail = (props) => {
    return (
        <div className="content">
            <img className="right floated mini ui image" src={props.avatar} />
            <div className="header">
                {props.author}
            </div>
            <div className="meta">
                {props.timeAgo}
            </div>
            <div className="description">
                {props.detailText}
            </div>
        </div>
    );
}

export default CommentDetail;