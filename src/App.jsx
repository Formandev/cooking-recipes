import "./App.css";
import { useGlobalContext } from "./context";

import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Img from "./assets/zelinski.jpeg";

export default function App() {
  const { showModal, favorites } = useGlobalContext();
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

      {/* <Meals />
      {showModal && <Modal />} */}
    </main>
  );
}
