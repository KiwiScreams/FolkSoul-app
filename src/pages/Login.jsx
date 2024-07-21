import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    let navigate = useNavigate();
    function routeChange()
    {
        let path = `/main/mtavari`;
        navigate(path);
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
        validateForm();
    };
    const validateForm = () => {
        if (username.trim() !== '' && password.trim() !== '') {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername('');
        setPassword('');
    };
    return (
        <>
            <div className="form">
                <div className="parallelogram">
                    <div className="text-bg">კარიბჭე</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" id="username" placeholder="მეტსახელი" className="text-sm" value={username}
                        onChange={handleInputChange}
                    />
                    <input type="password" name="password" id="password" placeholder="პაროლი" className="text-sm" value={password}
                        onChange={handleInputChange} />
                    <button
                        className="login-btn white-text text-sm"
                        id="login-btn"
                        disabled={isButtonDisabled}
                        onClick={routeChange}
                    >
                        შემობრძანდი
                    </button>
                </form>
            </div>
        </>
    )
}
export default Login