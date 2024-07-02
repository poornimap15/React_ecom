import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
    <Shop/>
   <Footer/>
    </div>
  );
}

export default App;
