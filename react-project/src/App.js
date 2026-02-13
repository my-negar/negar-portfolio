import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Shop from './pages/shop/shop.jsx';
import Cart from './page/cart/cart';
import Nav from './componennt/nav';
import {ShopContextProvider} from "./context/shopContext"

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
     <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Shop />} />
         <Route path='/cart' element={<Cart />} />
      </Routes>
     </Router>
     </ShopContextProvider>
    </div>
  );
}

export default App;
