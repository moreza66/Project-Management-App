import { FaExclamationTriangle } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <FaExclamationTriangle className="text-danger" size="10rem" />
            <h1>404</h1>
            <p className="lead">Sorry, This Page Does Not Exist</p>
            <Link to="/" className="btn btn-primary">
                Back To Home
            </Link>
        </div>
    )
}
