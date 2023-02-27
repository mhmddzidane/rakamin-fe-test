import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterExample from "./components/CounterExample";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelloWorld from "./components/HelloWorld";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <HelloWorld name={"zidane"} />
        <CounterExample />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
