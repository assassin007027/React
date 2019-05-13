import React from 'react';
import { connect } from 'react-redux';

class SongDetails extends React.Component {
    render() {
        if(!this.props.selectedSong) {
            return <div className="ui loading segment" style={{width: '100%', height: '100%'}}>Loading...</div>
        }

        return (
            <div className="ui segment item" style={{width: '100%', height: '100%'}}>
                <div className="content">
                    <div className="header">{this.props.selectedSong.title}</div>
                    <div className="description">{this.props.selectedSong.duration}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {selectedSong: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetails);