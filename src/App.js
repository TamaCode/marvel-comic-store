import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Title from './components/Title/Title.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <Title title='Explore Our Comics Store !' />
      </body>
    </div>
  );
}

export default App;
