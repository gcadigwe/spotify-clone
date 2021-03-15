const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: [],
  token:
    "BQAkynQ-WDRg9v1OTahLlKYdln-4GJxhs2tv-JmPiRbWFrtEDQFjIb4fGYc5FtE8vYc5hbXZEaa6gvJjpDwESX717NABcnNexqfESq5engLtIe8Vfl-NBb3iXQ2eG-x5U9IsHkZ4Cn1fDqastn6m0OH5GZrgjea_kJdNd8dLqu0A3tl6",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.payload,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
