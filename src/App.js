import "./App.css";
import Navbar from "./Components/Navbar";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Store/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
