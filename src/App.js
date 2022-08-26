import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <ItemListContainer greetings='Explore Our Comics Store !' />
      </body>
    </div>
  );
}

export default App;
