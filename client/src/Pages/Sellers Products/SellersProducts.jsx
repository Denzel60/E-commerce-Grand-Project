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
                    console.log(data);
                    setProducts(data.message);
                }
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);
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
                                <h4>Name: {product.name}</h4>
                                <p>Price: {product.price}</p>
                                <h4>Seller: {product.Seller}</h4>
                                <p>Description: {product.description}</p>
                                <p>Category: {product.category}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SellersProducts