import React from 'react';
import { connect } from 'react-redux';
import SongItem from './SongItem';

class SongList extends React.Component {
    render() {
        console.log(this.props);

        const song = this.props.songs.map(song => {
            return <SongItem song={song} key={song.title}/>
        });

        return (
            <div className="ui middle aligned selection list items">
                {song}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {songs: state.songs};
}

export default connect(mapStateToProps)(SongList);