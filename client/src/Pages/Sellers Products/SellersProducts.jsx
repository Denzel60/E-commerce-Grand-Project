import { useState, useEffect } from "react";

function SellersProducts() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3020/api/product/getSpecificProduct`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await response.json();

                if (data.success === true) {
                    // console.log(data);
                    setProducts(data.message);
                }
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    const handleDeleteProduct = (product) => {
        console.log(product);
    }
    return (
        <div>
            <div className="products">
                {
                    products.map((product, i) => (
                        <div className="product" key={i}>
                            <div className="product-left">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="product-right">
                                <h4><b>Name:</b> {product.name}</h4>
                                <p><b>Price:</b> {product.price}</p>
                                <h4><b>Seller:</b>{product.Seller}</h4>
                                <p><b>Description:</b> {product.description}</p>
                                <p><b>Category:</b> {product.category}</p>
                                <button onClick={() => handleDeleteProduct(product)}>Delete Your Product</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SellersProducts