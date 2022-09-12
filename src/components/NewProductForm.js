import React,{useState} from 'react';
// import UpdateInfo from './UpdateInfo';

function NewProductForm({onAddNewProduct}){
    const [newProduct, setNewProduct] = useState({
        name: "",
        image: "",
        producer: "",
        price: "",
    })

    function handleChange(e) {
        setNewProduct({...newProduct,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()

        const productObj  = {
            name: newProduct.name,
            image_url: newProduct.image,
            producer: newProduct.producer, 
            unit_price: newProduct.price

        }
        console.log(productObj);
            fetch("http://localhost:9292/products",{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productObj),
            })
            .then((res) => res.json())
            .then((newProduct) => {
                onAddNewProduct(newProduct);
                console.log(newProduct)
            })
        }




    return (
        <div className="newItem">
            <form onSubmit={handleSubmit}>
                <div className="group-form">
                    <h3>Add Poduct</h3>
                    <label for="Name" className="form-label">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name = "name"
                        value={newProduct.name}
                        onChange={handleChange}
                        placeholder="Product Name"/>
                </div>
                <div>
                    <label for="image" className="form-label">Image URL</label>
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        value={newProduct.image}
                        onChange={handleChange}
                        placeholder="Enter image url here..."/>
                </div>
                <div>
                    <label for="producer" className="form-label">Producer</label>
                    <input
                        className="form-control"
                        type="text"
                        name="producer"
                        value={newProduct.producer}
                        onChange={handleChange}
                        placeholder="Company"/>
                </div>

                <div>
                    <label for="price" className="form-label">Price</label>
                    <input
                        className="form-control"
                        type="text"
                        name="price"
                        value= {newProduct.price}
                        onChange={handleChange}
                        placeholder="Price"/>
                </div>
                
               <div>
               <input
                    className=" mt-4 btn btn-primary"type="submit"/>
               </div>
        </form>
        </div>
        
    )
}

export default NewProductForm;