
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

export function TodoRegister() {

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            UserId: '',
            UserName: '',
            Password: '',
            Mobile: '',
            Email: ''
        },
        onSubmit: (user) => {
            axios.post(`http://127.0.0.1:2020/register-user`, user);
            alert('Registerd Successfully..');
            navigate(`/dash/${user.UserId}`);
        }
    })
    return (
        <div>

            <form className="bg-dark text-white p-3 w-25" onSubmit={formik.handleSubmit}>
                <h2 className="fw-bold">Register User </h2>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" name="UserId" onChange={formik.handleChange} /></dd>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange} /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" name="Email" onChange={formik.handleChange} /></dd>
                </dl>
                <button className="btn btn-warning w-75">Register</button>
                <p>
                    <Link to="/login">Existing User Login</Link>
                </p>
            </form>

        </div>
    )
}