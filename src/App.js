import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Comic from './components/Comic/Comic.js';
import CartModal from './components/CartModal/CartModal.js';
import Form from './components/Form/Form.js';
import Footer from './components/Footer/Footer.js';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Context/CartProvider.js';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home ItemListContainer (Muestra categorias - Heroe)*/}
          <Route path='/' element={<ItemListContainer greeting='Choose your favourite Hero !' />} />

          {/* Categorias  ItemDetailContainer Muestra Comics por Heroe*/}
          <Route path='/category/:heroName/:docId' element={<ItemDetailContainer />} />

          {/* Item Muestra Comic Seleccionado*/}
          <Route path='/item/:comicId/:docId' element={<Comic />} />

          {/* Cart */}
          <Route path='/cart' element={<Form />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
