import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {

    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');

    const [EmailErr, SetEmailErr] = useState('');
    const [PasswordErr, SetPasswordErr] = useState('');
    const [Data, SetData] = useState([]);
    const [UserNotFoundtrufal,SetUserNotFoundtrufal] =useState(false);

    // Tost Start
    const UserNoteFound = () => {
        toast.error("something went wrong !", {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
        });
    }

    const UserFound = () => {
        toast.success("login successful", {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
        });
    }
    // End Toster

    // New User Redirect  Sign Up Page Start
    let navigate = useNavigate();
    const NewUser = () => {
        let path = `/SignUp`;
        navigate(path);
    }
    // End New User Redirect  Sign Up Page 

    // Start Form OnSubmite Event Hendler
    const OnsubmitData = (e) => {
        e.preventDefault();
        if (validation()) {

            // Get Data And Push New Object 



            if (Data.length > 0) {
                Data.map((ss, id) => {
                    if (ss.Email === Email && ss.Password === Password) {

                        UserFound()
                        localStorage.setItem("Login_Emial",Email)
                        localStorage.setItem("Login_UserName",ss.UserName)


                        setTimeout(() => {
                            let path = `/`;
                            navigate(path);
                        }, 3000);
                        return false
                    }
                    else {
                       
                        SetUserNotFoundtrufal(true)
                        
                        console.log(UserNotFoundtrufal)
                    }
                    return true
                }
                )
            }
            if(UserNotFoundtrufal == true){
                UserNoteFound();
            }
            else{
                console.log("sadkhaslmdih")
            }

        }
      
        //  ? UserNoteFound():console.log("User Fals")
    }
    // End Form OnSubmite Event Hendler


    useEffect(() => {
        const LocalStorageData = JSON.parse(localStorage.getItem('UserData'));
        SetData(LocalStorageData)
    }, [])

    
    // Start VAlidation Email || Password
    const validation = () => {
        let result = true;
        if (Email === "" || Email === null) {
            result = false;
            SetEmailErr('* Enter Your User Name')
        }
        else {
            SetEmailErr('')
        }
        if (Password === "" || Password === null) {
            result = false;
            SetPasswordErr('* Enter Your Password')
        }
        else {
            SetPasswordErr('')
        }
        // End VAlidation Email || Password


        return result;
    }

    return (
        <div>
            <section className="vh-100">
                <form onSubmit={OnsubmitData}>
                    <div className="container py-5 h-10" style={{ background: 'white', marginTop: "10%" }}>
                        <h1 className="row d-flex align-items-center justify-content-center">Login</h1>

                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    className="img-fluid" />
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form1Example13">Email address </label>
                                    <input type="text" id="Email" value={Email} className="form-control form-control-lg"

                                        onChange={(e) => { SetEmail(e.target.value) }}
                                    />
                                    <span style={{ color: 'red' }}>{EmailErr}</span>
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form1Example23">Password</label>
                                    <input type="password" id="Password" value={Password} className="form-control form-control-lg"
                                        onChange={(e) => { SetPassword(e.target.value) }} />
                                    <span style={{ color: 'red' }}>{PasswordErr}</span>
                                </div>
                                <button className="btn btn-primary btn-lg btn-block">Login</button>
                                <button className="btn btn-light btn-lg btn-block " onClick={NewUser} style={{ marginLeft: '20px' }} >New User</button>


                            </div>
                        </div>
                    </div>
                </form>

            </section>
            <ToastContainer />
        </div>
    )
}

export default Login
