import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key: "23f0e07dac4e85bff7bf70845ddf34e7",
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDtail: id => api.get(`moive/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),

    search: term => api.get("search/movie", {
        params: {
            query: `${term}`
        }
    })
};


export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    tvDetail: id => api.get(`tv/${id}`, {
        params:{
            append_to_response:"vidieos"
        }

    }),

    search: term => api.get("search/tv", {
        params: {
            query: `${term}`
        }
    })
  };