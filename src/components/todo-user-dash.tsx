import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { useNavigate, useParams, Link } from "react-router-dom";
import { AppointmentsContract } from "../contracts/AppointmentsContracts";
import axios from "axios";
import moment from "moment";
import { useFormik } from "formik";



export function TodoUserDashBoard() {
    const [appointments, setAppointments] = useState<AppointmentsContract[]>();
   
    const [cookies, setCookie, removeCookie] = useCookies(['userid']);
    let navigate = useNavigate();
    let params = useParams();

    function handleSignOut() {
        removeCookie('userid');
        navigate('/login');
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:2020/get-task/${params.userid}`)
            .then(response => {
                setAppointments(response.data);
            })
    }, [])

    function handleDeleteClick(id: number) {
        axios.delete(`http://127.0.0.1:2020/delete-task/${id}`)
            .then(() => {
                alert('Task Deleted');
                window.location.reload();
            })


    }



return (
        <div className=" fw-bold bg-light p-3" style={{ height: '100vh' }}>
            <h2 className="d-flex justify-content-between"><span>{cookies['userid']} Your Appointments</span><button onClick={handleSignOut} className="btn btn-link">Signout</button></h2>
            <div className="my-2">
                <Link to="/add-task" className="btn btn-primary">Add Task</Link>
            </div>

            <div>
                {
                    appointments?.map(appointment =>
                        <div className="alert alert-dismissible alert-success">

                            <h2>{appointment.Title}</h2>
                            <p>{appointment.Description}</p>
                            <p>{moment(appointment.Date).format('MMMM do yyyy, h:mm:ss a')}</p>
                            <Link to="/edit-task" className="btn btn-warning" > <span className="bi bi-pen"></span> Edit </Link>
                            <button onClick={() => { handleDeleteClick(appointment.Appointment_Id) }} className="bi bi-trash btn btn-danger ms-2"> Delete </button>

                        </div>

                    )
                }


            </div>


        </div>



    )
}