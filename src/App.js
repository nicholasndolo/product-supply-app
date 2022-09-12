
import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

function App() {
  const [productList, setProductList] = useState([])
  const[orderList, setOrderList] = useState([])

    useEffect(()=> {
        fetch("http://localhost:9292/products")
        .then((res) => res.json())
        .then((products) => setProductList(products)) 

    }, [])

    useEffect(()=> {
      fetch("http://localhost:9292/products/orders")
      .then((res) => res.json())
      .then((orders) => setOrderList(orders)) 

  }, [])
    
    function handleAddNewProduct(newProduct){
      setProductList([...productList, newProduct]);
    }

    function handleProductUpdate(updatedProduct){
      const updatedProductList = productList.map((product) => {
        if(product.id === updatedProduct.id){
          return updatedProduct
        }else{
          return product
        }
      });
      setProductList(updatedProductList);
    }
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>
        </div>
        <Routes>
          <Route exact path="/" element={<Home productList={productList} setProductList={setProductList} onAddNewProduct={handleAddNewProduct}/>}></Route>
          <Route exact path="/products/:productId" element={<ProductDetails  onUpdateProduct={handleProductUpdate}/>}></Route>
          <Route exact path="/products/:productId/: orderId" element={<ProductDetails  onUpdateProduct={handleProductUpdate}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;