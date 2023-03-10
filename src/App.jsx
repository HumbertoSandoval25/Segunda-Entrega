import Button from "./components/Button"
import axios from "axios";
import {Route, Routes} from "react-router-dom"
import { useEffect, useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {

  const [productos, setproductos] = useState([]);

  
  const getProductos = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    setproductos(res.data);
  };

  useEffect(() => {
    getProductos()
  },[]);

  console.log(productos)

  return (
    <div>
      <Routes>
        <Route path="/" element={<ItemListContainer productos={productos}/>} />
        <Route path="/:id" element={<ItemDetailContainer productos={productos}/>} />
      </Routes>
    </div>
  )
}

export default App
