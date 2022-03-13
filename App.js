import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';
import Catalog from './components/catalog';
import Product from './components/product';
import Header from './components/header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return ( <div className="App">
        <Header></Header>
        <NavBar></NavBar>
          <h1>Greetings and welcome to your home for creative design solutions</h1>
          <Catalog></Catalog>
          <Footer></Footer>
      </div> );
}

export default App;

