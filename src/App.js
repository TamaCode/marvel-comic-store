import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Footer from './components/Footer/Footer.js';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home ItemListContainer (Muestra categorias - Heroe)*/}
        <Route path='/' element={<ItemListContainer greeting='Explore Our Comics Store !' />} />

        {/* Categorias  ItemDetailContainer Muestra Comics por Heroe*/}
        <Route path='/category/:heroName' element={<ItemDetailContainer />} />

        {/* Item Muestra Comic Seleccionado*/}
        <Route path='/comic/:comicId' />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
