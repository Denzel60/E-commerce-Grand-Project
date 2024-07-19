import './Login.css'
import useAuthStore from "../../store/AuthStore"
import useCredentialsStore from '../../store/CredentialsStore'
import useAuthAdminStore from '../../store/AuthAdminStore'
import { useNavigate, Link } from "react-router-dom"
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Login() {
    const navigate = useNavigate();
    const setAuth = useAuthStore((state) => state.setAuth)
    const setCredentials = useCredentialsStore((state) => state.setCredentials)
    const setAuthAdmin = useAuthAdminStore((state) => state.setAuthAdmin)
    const AuthAdmin = useAuthAdminStore((state) => state.AuthAdmin)

    const style = {
        color: "red"
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Password is required'),
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: (values) => {
            console.log(values)
            navigate("/dashboard")
            setAuth(true)
            setAuthAdmin(true)
            console.log(AuthAdmin)
            setCredentials(values)
        },

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
                <button type='submit'>Login</button>
                <p>Already have an account <Link to="/register">Register</Link></p>
            </form>
        </div>
    )
}

export default Login