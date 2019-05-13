import { combineReducers } from 'redux';

const selectSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
}

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it That way', duration: '1:45' },
        { title: 'Can Be', duration: '4:05' }
    ];
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
});