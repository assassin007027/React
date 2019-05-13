import React from 'react';

class VideoItem extends React.Component {
    onSelectItem = () => {
        this.props.onSelectVideoItem(this.props.video);
    }

    render() {
        return (
            <div className="item" onClick={this.onSelectItem}>
                <img className="ui image" alt={this.props.video.snippet.description} src={this.props.video.snippet.thumbnails.default.url}/>
                <div className="content">
                    <div className="header">{this.props.video.snippet.title}</div>
                    <div className="description"><p>{this.props.video.snippet.description}</p></div>
                </div>
            </div>
        );
    }
}

export default VideoItem;