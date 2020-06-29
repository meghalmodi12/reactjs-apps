import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title : 'Song A', duration : '4:05' },
        { title : 'Song B', duration : '3.23' },
        { title : 'Song C', duration : '4:51' },
        { title : 'Song D', duration : '2:35' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});