import './Login.css'
import useAuthStore from "../../store/AuthStore"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();
    const setAuth = useAuthStore((state) => state.setAuth)

    const handleLogin = () => {
        setAuth(true)
        navigate('/dashboard')
    }
    return (
        <div className="form">
            <form action="">
                <input type="number" placeholder="Enter your Phone Number eg +25412345678" />
                <input type="number" placeholder="Enter your Address eg 205-00526" />
                <input type="password" placeholder='Enter your password' name="" id="" />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login