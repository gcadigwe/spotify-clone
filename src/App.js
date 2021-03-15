import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./components/Player/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch, useSelector } from "react-redux";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();
  const { state } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        payload: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("user ==", user);
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          payload: playlists,
        });
      });
    }

    window.location.hash = "";
  }, []);
  console.log("TOKEN from redux >>", state.token);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
