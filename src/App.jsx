import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import { MountainAPI } from "./pages/MountainAPI";
import { BookCreate } from "./pages/BookCreate";
import { BookIndex } from "./pages/BookIndex";
import { BookShow } from "./pages/BookShow";


import Image from './img/janken.png';
import Image2 from './img/star.png';
import Image3 from './img/yama.png';
import Image4 from './img/book.png';
import Image5 from './img/BookIndex.png';

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-96">
        <h1 className="m-[30px] text-center text-4xl font-bold">遊び場</h1>
        <ul>
          {/* Linkをあらかじめいreact-router-domから入れる */}
          <div className="place-content-evenly flex justify-items center">
            <li>
              <Link to="/Omikuji"><img className="flex-1 h-12" src={Image2} alt="Image" /></Link>
            </li>
            <li>
              <Link to="/Janken"> <img className="flex-1 h-12" src={Image} alt="Image" /></Link>
            </li>
            <li>
              <Link to="/MountainAPI"> <img className="flex-1 h-12" src={Image3} alt="Image" /></Link>
            </li>
            <li>
              <Link to="/BookCreate"><img className="flex-1 h-12" src={Image4} alt="Image" /></Link>
            </li>
            <li>
              {/* link toはアドレスというイメージです */}
              <Link to="/book-index"><img className="flex-1 h-12" src={Image5} alt="Image" /></Link>
            </li>
          </div>

        </ul>

        <Routes>
          <Route path="/Omikuji" element={<Omikuji />} />
          <Route path="/Janken" element={<Janken />} />
          <Route path="/MountainAPI" element={<MountainAPI />} />
          <Route path="/BookCreate" element={<BookCreate />} />
          <Route path="/book-index" element={<BookIndex />} />
          <Route path="/Book-show/:id" element={<BookShow />} />

        </Routes>
      </div >
    </BrowserRouter >

  );
};
export default App;