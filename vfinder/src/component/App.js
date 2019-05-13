import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../api/youtube';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {
    state = {videos: [], selectedvideo: null}

    onSearchSubmit = async (term) => {
        const response = await YouTube.get('/search', {
            params: {q: term}
        }).catch((error) => {
            console.log(error);
        });
        this.setState({
            videos: response.data.items,
            selectedvideo: response.data.items[0]
        });
    }

    onSelectVideo = (video) => {
        this.setState({selectedvideo: video});
    }

    render() {  
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} count={this.state.videos.length} />
                <div className="ui segment grid" style={{height: '500px'}}>
                    <div className="eight wide column">
                        <VideoDetail video={this.state.selectedvideo} />
                    </div>
                    <div className="eight wide column">
                        <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;