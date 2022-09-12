import React from 'react';
import NewProductForm from './NewProductForm';
import Product from './Product';

function Home({productList, setProductList, onAddNewProduct}) {

    
     let products = productList.map((product)=>(
         <Product key={product.id}
                //   onUpdateProduct={handleProductUpdate}
                  productList={productList}
                  setProductList={setProductList}
                  productImage={product.image_url}
                  productName={product.name}
                  ProductProducer={product.producer}
                  productPrice={product.unit_price}
                  productId={product.id}/>
     ))

    return (
        <div className="container ">
            <h2>Product List</h2>
            <div className="row">
            {products}
            </div>
            <div>
             <NewProductForm onAddNewProduct={onAddNewProduct}/>
            </div>
             
        </div>
    )
}
 export default Home;
