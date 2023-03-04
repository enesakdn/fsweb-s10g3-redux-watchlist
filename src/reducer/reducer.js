import { movies } from "../movies";
import { FAV_EKLE, FAV_CIKAR } from "../action/action";

const initialState = {
  favMovies: [],
  movies: movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FAV_EKLE:
      const isMovieInFavList = state.favMovies.find(
        (movie) => movie.id !== action.payload.id
      );

      if (isMovieInFavList) {
        return state;
      } else {
        return {
          ...state,
          favMovies: [...state.favMovies, state.movies[action.payload]],
        };
      }

    case FAV_CIKAR:
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
