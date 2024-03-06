import axios from "axios";

// const url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

// const options = {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODFiNjRkN2UwODBjYTgyYmU4N2MyNmQ5MmU0NWQzMSIsInN1YiI6IjY1ZTgzZWFhOTYzODY0MDE4MWM5YjliOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kuVP08js2YN3it4paquCgWPfDytRrw_KU68IX4XSqUc",
//   },
// };

// export const fetchMovies = async () => {
//   const response = await axios
//     .get(url, options)
//     .then(() => console.log(response))
//     .catch((err) => console.error(err));
//   return response;
// };

// const fetchData = async ({ page = 1 }) => {

//   try {
//     const options = {
//       method: "GET",
//       url: "https://api.themoviedb.org/3/trending/movie/day",
//       params: { language: "en-US", page },
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODFiNjRkN2UwODBjYTgyYmU4N2MyNmQ5MmU0NWQzMSIsInN1YiI6IjY1ZTgzZWFhOTYzODY0MDE4MWM5YjliOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kuVP08js2YN3it4paquCgWPfDytRrw_KU68IX4XSqUc",
//       },
//     };

//     const response = await axios.request(options);

//     fetchData();

//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };
// export default fetchData;
