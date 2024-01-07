import { Routes, Route } from "react-router-dom";
import React from 'react';
import PlaylistProvider from "./contexts/PlaylistProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Playlist from "./pages/Playlist";
import "./assets/css/styles.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CreatePlaylist from "./pages/CreatePlaylist";

function App() {
  const routes = [
    { path: "/index", element: <Index /> },
    { path: "/about", element: <About /> },
    { path: "/playlist/:id", element: <Playlist /> },
    { path: "/create_playlist/:id", element: <CreatePlaylist /> },
    { path: "/create_playlist", element: <CreatePlaylist /> },
    { path: "/", element: <Index /> },
  ];

  const index = 0;
  const about = 1;
  const playlist = 2;
  const create_playlist_id = 3;
  const create_playlist = 4;
  const base = 5;

  return (
    <div id="container">
      <PlaylistProvider>
        <NavBar />
        <Routes>
          {/* TODO : Configurer les routes et leurs components à afficher */}
          <Route path={routes[index].path} element={routes[index].element} />
          <Route path={routes[about].path} element={routes[about].element} />
          <Route path={routes[playlist].path} element={routes[playlist].element} />
          <Route path={routes[create_playlist_id].path} element={routes[create_playlist_id].element} />
          <Route path={routes[create_playlist].path} element={routes[create_playlist].element} />
          <Route path={routes[base].path} element={routes[base].element} />
        </Routes>
        <Footer />
      </PlaylistProvider>
    </div>
  );
}

export default App;
