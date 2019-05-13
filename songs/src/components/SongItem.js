import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongItem extends React.Component {
    onSelectSong = () => {
        this.props.selectSong(this.props.song);
    }

    render() {
        return (
            <div className="item" onClick={this.onSelectSong}>
                <div className="content">
                    <h3 className="header">{this.props.song.title}</h3>
                    <p className="description">{this.props.song.duration}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {songs: state.songs};
}

export default connect(mapStateToProps, {selectSong})(SongItem);