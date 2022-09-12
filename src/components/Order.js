import React from "react";
import { Link } from "react-router-dom";
//import { useParams } from 'react-router-dom';

function Order({orderId, quantity}) {
  

    
    function handleDelete(){
      fetch(`http://localhost:9292/products/${productId}/orders/${orderId}`,{
        method: "DELETE"
      })
      .then((res) => res.json())
      .then(()=>{
      setOrderList(orderList.filter(item => item.id !== orderId))
      
      })
    }
  return (
    <div className="col">
      <div className="card h-90" style={{ width: 18 + "rem" }}>
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          {/* <Link to={"/products/" + productId} className="btn btn-primary">
            View Details
          </Link> */}
        </div>
        <div className="card-footer">
          <button className="btn btn-danger mt-1" onClick={handleDelete}>Delete</button>
        
        </div>
      </div>
     
    </div>
  );
}
export default Order;