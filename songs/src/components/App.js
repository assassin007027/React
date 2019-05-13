import React from 'react';
import SongDetails from './SongDetail';
import SongList from './SongList';

class App extends React.Component {
    render() {
        return (
            <div className="ui container segment grid">
                <div className="eight wide column"><SongList /></div>
                <div className="eight wide column"><SongDetails /></div>
            </div>
        );
    }
}

export default App;