import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import UpdateProduct from './UpdateProduct';
import { Link } from "react-router-dom";

function ProductDetails({onUpdateProduct}){
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    let {productId} = useParams()

    useEffect(()=> {
        fetch(`http://localhost:9292/products/${productId}`)
        .then((res) => res.json())
        .then((product) => {

            setName(product.name);
            setPrice(product.unit_price);
            setImage(product.image_url); 
              

        }) 
    }, [])


 
//     return (
//         <div className="container">
//             <UpdateProduct onUpdateProduct={onUpdateProduct} />
//             <center>
//                 <h3 >{name}</h3>
//                 <img src={image} style ={{height: 300 + "px", width: 500 + "px"}}/>
//                 <h4>Price ksh.{price}</h4>
//             </center>
//             <div>
//             <center>
//             <Link to={"/products/" + productId} className="btn btn-primary">
//             Place Order
//           </Link>
//           </center>
//             </div>
//         </div>
//     )
// }

// export default ProductDetails;

