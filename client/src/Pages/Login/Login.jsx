import './Login.css'
import useAuthStore from "../../store/AuthStore"
import useCredentialsStore from '../../store/CredentialsStore'
import useAuthAdminStore from '../../store/AuthAdminStore'
import useAuthSellerStore from '../../store/AuthSellerStore'
import useAuthBuyerStore from '../../store/AuthBuyerStore'
import { useNavigate, Link } from "react-router-dom"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

function Login() {
    const navigate = useNavigate();
    const setAuth = useAuthStore((state) => state.setAuth)
    const setAuthAdmin = useAuthAdminStore((state) => state.setAuthAdmin)
    const setAuthSeller = useAuthSellerStore((state) => state.setAuthSeller)
    const setAuthBuyer = useAuthBuyerStore((state) => state.setAuthBuyer)
    const setCredentials = useCredentialsStore((state) => state.setCredentials)
    const AuthBuyer = useAuthBuyerStore((state) => state.AuthBuyer)
    // const Credentials = useCredentialsStore((state) => state.Credentials)
    const [error, setError] = useState(false)
    // const AuthAdmin = useAuthAdminStore((state) => state.AuthAdmin)

    const style = {
        color: "red"
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Password is required'),
    })

    const handleSubmit = async (values) => {
        setCredentials(values)
        try {
            const response = await fetch(`http://localhost:3020/api/user/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values),
            })
            const data = await response.json();
            setCredentials(data.data)
            // console.log(data)
            if (data.success === true) {
                if (data.data.role == "seller") {
                    navigate("/sellers")
                    setAuthSeller(true)
                    setAuth(true)
                } else if (data.data.role === null) {
                    navigate("/dashboard")
                    setAuth(true)
                    setAuthBuyer(true)
                    console.log(AuthBuyer)
                } else if (data.data.role == "admin") {
                    navigate("/sellers")
                    setAuthAdmin(true)
                    setAuth(true)
                }
            } else {
                setError(data.message)
            }
        } catch (error) {
            setError(error.message)
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: handleSubmit,

        validationSchema: validationSchema,
    })

    return (
        <div className="form">
            <form onSubmit={formik.handleSubmit}>
                <h3>Login</h3>
                <input type="email" placeholder="Enter your john@gmail.com" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email && <div style={style}>Enter email</div>}
                <input type="password" placeholder='Enter your password' name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.password && formik.errors.password && <div style={style}>Enter password</div>}
                {error && <div style={style}>{error}</div>}
                <button type='submit'>Login</button>
                <p>Already have an account <Link to="/register">Register</Link></p>
            </form>
        </div>
    )
}

export default Login