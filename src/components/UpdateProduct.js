import React, {useState} from 'react'; 
import {useParams} from 'react-router-dom'

function UpdateProduct({onUpdateProduct}){

    const [updatedPrice, setUpdatedPrice] = useState({
        price: "",  
    })

    let {productId} = useParams()

    function handleChange(e){
        setUpdatedPrice({...updatedPrice, [e.target.name]: e.target.value})

    }

//     function handleSubmit(e){
//         e.preventDefault();
         

//         const updatedObj = {

//             unit_price: updatedPrice.price
//         }

//         fetch(`http://localhost:9292/products/${productId}`,{
//              method: "PATCH",
//              headers: {
//                  "Content-Type": "application/json",
//              },
//              body: JSON.stringify(updatedObj),

//          })
//          .then((res) => res.json())
//          .then((updatedProduct) => onUpdateProduct(updatedProduct))
//     }

//     return (
//         <div className="updateForm">
//             <form onSubmit={handleSubmit}>
//                     <h3>Update Unit Price</h3>
//                 <div>
//                     <label for="price" className="form-label">Price</label>
//                     <input
//                         className="form-control"
//                         type="text"
//                         name="price"
//                         value= {updatedPrice.unit_price}
//                         onChange={handleChange}
//                         placeholder="Price"/>
//                 </div>
//                <div>
//                <input
//                     className=" mt-4 btn btn-primary"type="submit"/>
//                </div>
//             </form>
//         </div>
//     )
// }

// export default UpdateProduct;