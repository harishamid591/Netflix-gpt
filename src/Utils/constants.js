
const GOOGLE_API_KEY = 'AIzaSyCs44y5Ycv_7tCgYptBhWuBRVaddKjgRZQ'

export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key='+GOOGLE_API_KEY


export const API_OPTIONS = {method: 'GET', headers: {accept: 'application/json'}};

export const SUPPORTED_LANGUAGES = [{identifier:'en',name:'English'},
    {identifier:'hindi',name:'Hindi'},{identifier:'mal',name:'Malayalam'}
]