import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { BrowserRouter, Route } from 'react-router-dom'
import Home from "./components/Home";
function App() {
  return <BrowserRouter>
    <Header />
    <div>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/' exact>
        <Cart />
      </Route>
    </div>
  </BrowserRouter>
}

export default App;
