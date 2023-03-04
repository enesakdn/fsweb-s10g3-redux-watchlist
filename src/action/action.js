export const FAV_EKLE = "FAV_EKLE";
export const FAV_CIKAR = "FAV_CIKAR";

export const addFav = (id) => {
  return {
    type: FAV_EKLE,
    payload: id,
  };
};

export const deleteFav = (id) => {
  return {
    type: FAV_CIKAR,
    payload: id,
  };
};
