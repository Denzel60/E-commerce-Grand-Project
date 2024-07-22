import { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from 'yup'

function CreateProduct() {

    const [error, setError] = useState()
    const [imageInput, setImageInput] = useState()
    // const [image, setImage] = useState()
    const [product, setProduct] = useState({})

    const cloudName = "dsqpytomn";
    const preset = "E-commerce";

    const style = {
        color: "red"
    }

    const handleSubmit = async (values) => {
        try {
            const payload = new FormData()
            payload.append("file", imageInput)
            payload.append("upload_preset", preset)

            try {
                const responseImg = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, payload)
                // setImage(responseImg.data.secure_url)
                setProduct({
                    name: values.name,
                    price: values.price,
                    image: responseImg.data.secure_url,
                    description: values.description,
                    category: values.category
                })
            } catch (error) {
                console.log(error.message)
            }
            // setProduct({
            //     name: values.name,
            //     price: values.price,
            //     image: values.responseImg.data.secure_url,
            //     description: values.description,
            //     category: values.category
            // })
            console.log(product);
            const response = await fetch(`http://localhost:3020/api/product/createProduct`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product),
                credentials: 'include',
            })
            const data = await response.json();
            console.log(data)
            if (data.success === true) {
                setError("Created Successfully")
            } else {
                setError(data.message)
            }
        } catch (error) {
            setError(error.message)
            // console.log(error)
        }
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Phone Number is required"),
        price: Yup.string().required('Required'),
        description: Yup.string().required('Password is required'),
        // image: Yup.string().required("Image is required"),
        category: Yup.string().required("Category is required")
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            category: "",
            price: "",
            description: "",
        },

        onSubmit: handleSubmit,

        validationSchema: validationSchema,
    })

    return (
        <div className="form">
            <form onSubmit={formik.handleSubmit}>
                <h3>Create Product</h3>

                {error}

                <input type="text" placeholder="Enter your Name of your Product eg Phone" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.name && formik.errors.name && <div style={style}>Enter phone number</div>}

                <input type="file" name="image" id="image" onChange={(e) => { setImageInput(e.target.files[0]) }} />

                <select id="category" name="category" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                    <option value="Computing">Computing</option>
                    <option value="Musical Instruments">Musical Instruments</option>
                    <option value="Phones & Tablets">Phones & Tablets</option>
                    <option value="Toys & Games">Toys & Games</option>
                    <option value="Home & Office">Home & Office</option>
                    <option value="Automobile">Automobile</option>
                    <option value="Industrial & Scientific">Industrial & Scientific</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>

                <input type="number" placeholder="Enter your price eg 1000" name="price" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.price && formik.errors.price && <div style={style}>Enter price</div>}

                <input type="description" placeholder='Enter your description' name="description" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.description && formik.errors.description && <div style={style}>Enter description</div>}

                <button type="submit">Add Product</button>

            </form>
        </div>
    )
}

export default CreateProduct