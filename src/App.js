import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Title from './components/Title/Title.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <ItemListContainer greeting='Bienvenid@ a la Tienda Online de Comics de Marvel!' />
        <Title title='Explore Our Comics Store !' />
      </body>
    </div>
  );
}

export default App;
