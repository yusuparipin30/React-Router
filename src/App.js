// Kita bisa membuat aplikasi kita seperti multiple page application dengan menggunakan react router.

/* Berbeda dengan multiple page application pada umumnya, react router tidak melakukan request ke server,
 melainkan hanya merender komponen di sisi client dengan URL tertentu.*/

// Untuk dapat menggunakan react router, kita perlu menginstall react-router-dom.

// Buka terminal baru, kemudian ketikan perintah berikut untuk menginstal react-router-dom:
// npm install react-router-dom

import { useState } from "react"
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
 
function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 982},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 763},
    {id: 5, title: 'Product 5', price: 389}
  ]);
 
  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  }
 
          //di dalam router gunakan fungsi Routes
          //didalam Routes gunakan route yang di instal dari react router dom
          //di dalam route terdapat atribut path yaitu url
          //panggil komponen pada saat mengunjungi slash
  return (
    <div>
      <Router>
        <Routes>

          <Route exact path="/" element={<ProductList/>} products={ products } deleteProduct={ deleteProduct }/>
          
          <Route path="/about" element={<About/>} />
            
          

          <Route path="/contact" element={<Contact/>} />
    
          

        </Routes>
      </Router>
    </div>
  );
}
 
export default App;