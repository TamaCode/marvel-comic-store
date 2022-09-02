import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <ItemListContainer greeting='Explore Our Comics Store !' />
        <ItemDetailContainer />
        <Footer />
      </body>
    </div>
  );
}

export default App;
