import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./components/Player/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch } from "react-redux";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("user ==", user);
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      });
    }

    window.location.hash = "";
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
