export const initialState = [];

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
    
      const exists = state.find((photo) => photo.id === action.payload.id);
      if (exists) {
        return state.filter((photo) => photo.id !== action.payload.id);
      } else {
        return [...state, action.payload];
      }
    case 'SET_INITIAL':
      return action.payload;
    default:
      return state;
  }
};
