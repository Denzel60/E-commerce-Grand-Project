import './AllProducts.css'
import { useEffect, useState } from "react";
import "https://unpkg.com/@appnest/masonry-layout?module";

function AllProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3020/api/product/getAllProducts`, {
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
    return (
        <div>
            {/* <div className="products"> */}
            <masonry-layout cols="4" maxcolwidth="400" gap="10" debounce="500">
                {
                    products.map((product, i) => (
                        <div className="items" key={i}>
                            <img src={product.image} alt="" />

                            <h4>Name: {product.name}</h4>
                            <p>Price: {product.price}</p>
                            <h4>Seller: {product.Seller}</h4>
                            <p>Description: {product.description}</p>
                            <p>Category: {product.category}</p>

                        </div>
                    ))
                }
            </masonry-layout>
        </div>
    )
}

export default AllProducts