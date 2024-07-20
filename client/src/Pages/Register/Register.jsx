// import useAuthStore from "../../store/AuthStore"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useFormik } from 'formik'
import { useState } from "react";
import * as Yup from 'yup'

function Register() {

    const navigate = useNavigate();
    const [error, setError] = useState(false)
    // const setAuth = useAuthStore((state) => state.setAuth)
    // const [error, setError] = useState(false)

    const style = {
        color: "red"
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        phoneNumber: Yup.string().required("Phone Number is required"),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Password is required'),
    })

    const handleSubmit = async (values) => {
        try {
            const response = await fetch(`http://localhost:3020/api/user/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values),
            })
            const data = await response.json();
            console.log(data)
            if (data.success === true) {
                navigate("/login")
            } else {
                setError(data.message)
            }
        } catch (error) {
            setError(error.message)
        }
    }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
        },

        onSubmit: handleSubmit,

        validationSchema: validationSchema,
    })

    return (
        <div className="form">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <div className="names-cont">
                    <input type="text" placeholder="Enter your First Name eg John" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <input type="text" placeholder="Enter your Last Name eg Doe" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                {formik.touched.firstName && formik.errors.firstName && <div style={style}>Enter first name</div>}
                {formik.touched.lastName && formik.errors.lastName && <div style={style}>Enter Last name</div>}

                <input type="number" placeholder="Enter your Phone Number eg +25412345678" name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                {formik.touched.phoneNumber && formik.errors.phoneNumber && <div style={style}>Enter phone number</div>}
                <input type="email" placeholder="Enter your email eg johndoe@gmail.com" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email && <div style={style}>Enter email</div>}
                <input type="password" placeholder='Enter your password' name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.password && formik.errors.password && <div style={style}>Enter password</div>}
                {error && <div style={style}>{error}</div>}
                <button type="submit">Register for an account</button>
                <p>Already have an account <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}

export default Register