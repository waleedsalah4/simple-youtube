import axios from 'axios';

const KEY = 'AIzaSyDrasi4CtFKQbSZjeGZ9cSHmNbA8oP3u7A'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `${KEY}`
    }
})