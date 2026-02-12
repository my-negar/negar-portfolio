import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Shop from './pages/shop/shop';
import Cart from './page/cart/cart';
import Nav from './componennt/nav';


function App() {
  return (
    <div className="App">
     <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Shop />} />
         <Route path='/cart' element={<Cart />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
