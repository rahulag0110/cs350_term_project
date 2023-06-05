import { Link } from "react-router-dom";
import "../Styles/HomeBeforeLogin.css"

const HomeBeforeLogin = () => {

    return (
        <div className="container">
            <h1 className="title">Welcome to EveryDraw!!!</h1>
            <ul>
                <li>
                    <Link to="/login" className="link">Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomeBeforeLogin;