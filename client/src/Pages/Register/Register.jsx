import useAuthStore from "../../store/AuthStore"
import { useNavigate } from "react-router-dom"

function Register() {

    const navigate = useNavigate();
    const setAuth = useAuthStore((state) => state.setAuth)

    const handleRegister = () => {
        setAuth(true)
        navigate('/login')
    }
    return (
        <div className="form">
            <form action="">
                <div className="names-cont">
                    <input type="text" placeholder="Enter your First Name eg John" />
                    <input type="text" placeholder="Enter your Last Name eg Doe" />
                </div>
                <div className="names-cont">
                    <input type="number" placeholder="Enter your Phone Number eg +25412345678" />
                    <input type="number" placeholder="Enter your Additional Phone Number eg +25412345678" />
                </div>
                <input type="number" placeholder="Enter your Address eg 205-00526" />
                <input type="email" placeholder="Enter your email eg johndoe@gmail.com" name="" id="" />
                <div className="names-cont">
                    <input type="text" placeholder="Enter your region eg Nyanza" />
                    <input type="text" placeholder="Enter your city eg Nairobi" />
                </div>
                <input type="password" placeholder='Enter your password' name="" id="" />
                <button onClick={handleRegister}>Register for an account</button>
            </form>
        </div>
    )
}

export default Register