import React from "react";
import { Link } from "react-router-dom";

function Product({productId, productImage, productName, productPrice,productList,setProductList}) {
  

    
    // function handleDelete(){
    //   fetch(`http://localhost:9292/products/${productId}`,{
    //     method: "DELETE"
    //   })
    //   .then((res) => res.json())
    //   .then(()=>{
    //   setProductList(productList.filter(item => item.id !== productId))
      
    //   })
    // }
  return (
    <div className="col">
      <div className="card h-90" style={{ width: 18 + "rem" }}>
        <img src={productImage} style={{ height: 200 + 'px', width: 286 + 'px' }} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <Link to={"/products/" + productId} className="btn btn-primary">
            View Details
          </Link>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger mt-1" onClick={handleDelete}>Delete</button>
        
        </div>
      </div>
     
    </div>
  );
}
export default Product;