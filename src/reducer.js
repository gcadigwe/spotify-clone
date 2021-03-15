const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
