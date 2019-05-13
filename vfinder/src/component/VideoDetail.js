import React from 'react'

class VideoDetail extends React.Component {

    render() {
        if (!this.props.video) {
          return (
            <div className="ui segment loading" style={{width: '100%', height: '100%'}}>Loading...</div>
          );
        }
      
        let url = 'https://www.youtube.com/embed/' + this.props.video.id.videoId;
      
        return (
            <div>
                <div className="ui embed">
                    <iframe className="embed-responsive-item" src={url} title={this.props.video.snippet.title}/>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{this.props.video.snippet.title}</h4>
                    <p>{this.props.video.snippet.title}</p>
                </div>
            </div>
        );
    }
}

export default VideoDetail;