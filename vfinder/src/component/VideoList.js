import React from 'react';
import './VideoList.css'
import VideoItem from './VideoItem';

class VideoList extends React.Component {

    onSelectVideoItem = (video) => {
        this.props.onSelectVideo(video);
    }

    render() {
        const video = this.props.videos.map((video) => {
            return <VideoItem key={video.id.videoId} video={video} onSelectVideoItem={this.onSelectVideoItem}/>
        });

        return (
            <div className="ui relaxed divided list items" style={{height: '450px', overflowY: 'auto'}}>{video}</div>
        );
    }
}

export default VideoList;