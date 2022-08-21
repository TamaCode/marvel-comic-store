import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Title from './components/Title/Title.js';
import Hero_Card from './components/Hero_Card/Hero_Card.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <Title title='Explore Our Comics Store !'></Title>
        <Hero_Card heroName='Thor' />
      </body>
    </div>
  );
}

export default App;
