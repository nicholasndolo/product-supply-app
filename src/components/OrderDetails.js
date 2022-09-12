import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Order from './Order';
import { Link } from "react-router-dom";

function orderDetails(){
    const [orderList, setOrderList] = useState([])
    

    let {productId} = useParams()


    useEffect(()=> {
        fetch(`http://localhost:9292/products/36/orders`)
        .then((res) => res.json())
        .then((orders) => {

            setOrderList(orders);
              

        }) 
    }, [])


    let orders = orderList.map((order)=>(
        <Order orderId={order.id} quantity={order.quantity}
        /> 
        ))
 
    return (
        <div className="container">
            <PlaceOrder onOrder={onPlaceOrder} />
            <center>
                <h3 >{orders}</h3>
                <img src={image} style ={{height: 300 + "px", width: 500 + "px"}}/>
                <h4>Price ksh.{price}</h4>
            </center>
            <div>
            <center>
            <Link to={"/products/" + productId + "/orders" } className="btn btn-primary">
            Place Order
          </Link>
          </center>
            </div>
        </div>
    )
}

export default orderDetails;

