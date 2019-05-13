import axios from 'axios';

const API_key = 'AIzaSyBNf9YFSX_5gZoMatl3gN4UloYF2jsY5bo';

export default axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            maxResults: '25',
            part: 'snippet',
            type: 'video',
            key: API_key
        }
});