import './Profile.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useCredentialsStore from '../../store/CredentialsStore'

function Profile() {

    const Credentials = useCredentialsStore((state) => state.Credentials)

    const style = {
        color: "red"
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        phoneNumber: Yup.string().required("Phone Number is required"),
        additionalPhoneNumber: Yup.string().required("Additional Phone Number is required"),
        email: Yup.string().email('Invalid email').required('Required'),
        address: Yup.string().required('Address is required'),
        region: Yup.string().required('Region is required'),
        city: Yup.string().required('City is required'),
        password: Yup.string().required('Password is required'),
    })

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            additionalPhoneNumber: "",
            email: "",
            address: "",
            password: "",
            region: "",
            city: ""
        },

        onSubmit: (values) => {
            console.log(values)
        },

        validationSchema: validationSchema,
    })

    return (
        <div className="form">
            <div className='credentials'>
                <table className='profile'>
                    <tr>
                        <th>Fields</th>
                        <th>Details</th>
                    </tr>
                    <tr>
                        <td>First name: </td>
                        <td>{Credentials.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last name: </td>
                        <td>{Credentials.lastName}</td>
                    </tr>
                    <tr>
                        <td>Phone Number: </td>
                        <td>{Credentials.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td>Additional Phone Number: </td>
                        <td>{Credentials.additionalPhoneNumber}</td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td>{Credentials.email}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{Credentials.address}</td>
                    </tr>
                    <tr>
                        <td>Region</td>
                        <td>{Credentials.region}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{Credentials.city}</td>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <td>{Credentials.role}</td>
                    </tr>
                </table>
            </div>
            <form onSubmit={formik.handleSubmit} className='form-cont'>
                <h3> Profile</h3>
                <div className="names-cont">
                    <input type="text" placeholder="Enter your First Name eg John" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <input type="text" placeholder="Enter your Last Name eg Doe" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                {formik.touched.firstName && formik.errors.firstName && <div style={style}>Enter first name</div>}
                {formik.touched.lastName && formik.errors.lastName && <div style={style}>Enter Last name</div>}
                <div className="names-cont">
                    <input type="number" placeholder="Enter your Phone Number eg +25412345678" name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <input type="number" placeholder="Enter your Additional Phone Number eg +25412345678" name="additionalPhoneNumber" value={formik.values.additionalPhoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                {formik.touched.phoneNumber && formik.errors.phoneNumber && <div style={style}>Enter phone number</div>}
                {formik.touched.additionalPhoneNumber && formik.errors.additionalPhoneNumber && <div style={style}>Enter additional Phone Number</div>}
                <input type="number" placeholder="Enter your Address eg 205-00526" name="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <input type="email" placeholder="Enter your email eg johndoe@gmail.com" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.address && formik.errors.address && <div style={style}>Enter address</div>}
                {formik.touched.email && formik.errors.email && <div style={style}>Enter email</div>}
                <div className="names-cont">
                    <input type="text" placeholder="Enter your region eg Nyanza" name="region" value={formik.values.region} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <input type="text" placeholder="Enter your city eg Nairobi" name="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                {formik.touched.region && formik.errors.region && <div style={style}>Enter region</div>}
                {formik.touched.city && formik.errors.city && <div style={style}>Enter city</div>}
                <input type="password" placeholder='Enter your password' name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.password && formik.errors.password && <div style={style}>Enter password</div>}
                <button type="submit"> Profile for an account</button>

            </form >
        </div >
    )
}

export default Profile