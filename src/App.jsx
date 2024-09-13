import "./App.css";
import { useGlobalContext } from "./context";
import { useEffect, useRef } from "react";

import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Img from "./../assets/assets/zelinski-D0T-gleN-D0T-gleN.jpeg";
import song from "./../assets/assets/song-Bp4y7Q69.mp3";

export default function App() {
  const { showModal, favorites } = useGlobalContext();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <main>
      {/* <Search />
      {favorites.length > 0 && <Favorites />} */}
      <div className="flex">
        <img src={Img} alt="" />
        <div className="flex-2">
          <p>Вітаю Вас мобілізовано!</p>
          <p>Сайт забираємо собі, будемо робити біштеки</p>
        </div>
      </div>

      <audio ref={audioRef} src={song} />

      {/* <Meals />
      {showModal && <Modal />} */}
    </main>
  );
}
