import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "add47773d3b3a632b5a8dd18bffec678",
    language: "pt",
    include_adult: false,
  },
});

export const getMoviesService = (type: string, params: {}) => {
  return new Promise((resolve, reject) => {
    HTTP.get(`/movie/${type}`, params)
      .then((data) => {
        if (!data) {
          reject("mensagem de error");
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
