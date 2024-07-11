import { Link } from "react-router-dom";

export function TodoHome() {
    return (
        <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center">
            <div style={{marginTop:'15px'}}>
                
                <Link to="login" className="btn btn-primary  me-3">User Login</Link>
                <Link to="register" className="btn btn-warning">New User Register</Link>
            </div>
        </div>
    )
}