import './Login.css'
import useAuthStore from "../../store/AuthStore"
import { useNavigate, Link } from "react-router-dom"
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Login() {
    const navigate = useNavigate();
    const setAuth = useAuthStore((state) => state.setAuth)

    // const handleLogin = () => {
    //     setAuth(true)
    //     navigate('/dashboard')
    // }

    const style = {
        color: "red"
    }

    const validationSchema = Yup.object({
        phoneNumber: Yup.string().required("Phone Number is required"),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Password is required'),
    })

    const formik = useFormik({
        initialValues: {
            phoneNumber: "",
            email: "",
            password: "",
        },

        onSubmit: (values) => {
            console.log(values)
            navigate("/dashboard")
            setAuth(true)
        },

        validationSchema: validationSchema,
    })

    return (
        <div className="form">
            <form onSubmit={formik.handleSubmit}>
                <h3>Login</h3>
                <input type="number" placeholder="Enter your Phone Number eg +25412345678" name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && <div style={style}>Enter phone number</div>}
                <input type="email" placeholder="Enter your john@gmail.com" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email && <div style={style}>Enter email</div>}
                <input type="password" placeholder='Enter your password' name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.password && formik.errors.password && <div style={style}>Enter password</div>}
                <button type='submit'>Login</button>
                <p>Already have an account <Link to="/register">Register</Link></p>
            </form>
        </div>
    )
}

export default Login