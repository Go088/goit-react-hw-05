import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  params: { language: "en-US", page: 1 },
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODFiNjRkN2UwODBjYTgyYmU4N2MyNmQ5MmU0NWQzMSIsInN1YiI6IjY1ZTgzZWFhOTYzODY0MDE4MWM5YjliOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kuVP08js2YN3it4paquCgWPfDytRrw_KU68IX4XSqUc",
    accept: "application/json",
  },
};

export const fetchMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return response.data.results;
};

export const fetchMovieById = async (id) => {
  const response = await axios.get(`/movie/${id}`, options);
  return response.data;
};

export const fetchMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, options);
  return response.data;
};

export const fetchReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, options);
  return response.data.results;
};

export const fetchSearchMovies = async (query) => {
  options.params.query = query;
  const response = await axios.get(`/search/movie`, options);
  return response.data.results;
};
