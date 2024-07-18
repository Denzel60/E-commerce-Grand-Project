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
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login