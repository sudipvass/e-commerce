import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";

export default function App() {
  return (
   <div className="w-full ">
    {/* <Router> */}
      <Navbar />
      <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path ='/collection' element = {<Collection />} />
        <Route path ='/about' element = {<About />} />
        <Route path ='/contact' element = {<Contact />} />
        <Route path ='/product/:productId' element = {<Product />} />
        <Route path = "/cart" element = {<Cart />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/pace-order" element ={<PlaceOrder />}/>
        <Route path = "orders" element = {<Order />} />
      </Routes>
    {/* </Router> */}

   </div>
  )
}