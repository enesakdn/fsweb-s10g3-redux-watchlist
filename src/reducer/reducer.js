import { movies } from "../movies";
import { FAV_EKLE, FAV_CIKAR } from "../action/action";

const initialState = {
  favMovies: [],
  movies: movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FAV_EKLE:
      const realReturn =
        state.favMovies.id !== state.movies[action.payload]
          ? {
              ...state,
              favMovies: [...state.favMovies, state.movies[action.payload]],
            }
          : { ...state, favMovies: state.favMovies };
      return realReturn;

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
