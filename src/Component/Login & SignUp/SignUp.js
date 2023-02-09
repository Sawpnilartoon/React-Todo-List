import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUp() {



    const GetDataFromLS = () => {
        const LocalStorageData = localStorage.getItem('UserData')
        if (LocalStorageData) {
            // DAta COnvert In Object Formet
            return JSON.parse(LocalStorageData)
        }
        else {
            return []
        }
    }

    // Start  Main Array UserName || Email || Password
    const [SignUPData, SetSignUPData] = useState(GetDataFromLS());
    // End  Main Array UserName || Email || Password


    // Start Value Inpute State 
    const [UserName, SetUserName] = useState('');
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');
    // End Value Inpute State 

    // Start Err Msg Show State 
    const [UserNameErr, SetUserNameErr] = useState('');
    const [EmailErr, SetEmailErr] = useState('');
    const [EmailErrValid, SetEmailErrValid] = useState('');
    const [PasswordErr, SetPasswordErr] = useState('');
    // End Err Msg Show State 


    //Start  Alredy Account Login Page Redirect
    let navigate = useNavigate();
    const SignIn = () => {
        let path = `/Login`;
        navigate(path);
    }
    //End  Alredy Account Login Page Redirect

    const registrationSucces = () => {
        toast.success("User Create successful", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000
        });
    }
    // Start Form OnSubmite Event Hendler
    const OnsubmitData = (e) => {
        e.preventDefault();

        if (validation()) {

            // let path ='/SignUp';
            // navigate(path)

            // Satrt Array Object SignUpData
            let SignUpDataObject = {
                UserName,
                Email,
                Password
            }
            // End Array Object SignUpData




            // Start Push Array Object In Main Array
            SetSignUPData([...SignUPData, SignUpDataObject]);
            // End  Push Array Object In Main Array

          

            // Toster Start
            registrationSucces();
            // End Toster

            SetUserName('');
            SetEmail('');
            SetPassword('');

            setTimeout(() => {
                let path = `/Login`;
                navigate(path);
            }, 2000);
            return false
        }
    }
    // End Form OnSubmite Event Hendler

    // Start Push Data In Local Storge 
    useEffect(() => {
        localStorage.setItem('UserData', JSON.stringify(SignUPData));
       

    }, [SignUPData])
    // Start Push Data In Local Storge 




    // Start VAlidation UserName || Password
    const validation = () => {
        let result = true;
        if (UserName === "" || UserName === null) {
            result = false;
            SetUserNameErr('* Enter Your User Name')

        } else {
            SetUserNameErr('')
        }


        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (Email === ""|| Email === null) {
            result = false;
            SetEmailErr('*Enter your Email')
            SetEmailErrValid('')
        }
        else if(regex.test(Email)=== false|| Email === null) {
                result = false;
                SetEmailErrValid('*Enter Valid UserName')
                SetEmailErr('')

            }
        
        else {
            SetEmailErr('')
            SetEmailErrValid('')
        }
        
        if (Password === "" || Password === null) {
            result = false;
            SetPasswordErr('* Enter Your Password')
        } else {
            SetPasswordErr('')
        }
        return result;
    }
    // End VAlidation UserName || Password




    return (
        <div>
            <section className="vh-100">
                <form onSubmit={OnsubmitData}>
                    <div className="container py-5 h-10" style={{ background: 'white', marginTop: "10%" }}>
                        <h1 className="row d-flex align-items-center justify-content-center">SignUP</h1>

                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    className="img-fluid" />
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form1Example13">Enter UserName </label>
                                    <input type="text" id="UserName" value={UserName} className="form-control form-control-lg"

                                        onChange={(e) => { SetUserName(e.target.value) }}
                                    />
                                    <span style={{ color: 'red' }}>{UserNameErr}</span>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form1Example13">Email address </label>
                                    <input type='text' id="Email" value={Email} className="form-control form-control-lg"

                                        onChange={(e) => { SetEmail(e.target.value) }}
                                    />
                                    <span style={{ color: 'red' }}>{EmailErr}</span>
                                    <span style={{ color: 'red' }}>{EmailErrValid}</span>
                                    
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form1Example23">Password</label>
                                    <input type="password" id="Password" value={Password} className="form-control form-control-lg"
                                        onChange={(e) => { SetPassword(e.target.value) }} />
                                    <span style={{ color: 'red' }}>{PasswordErr}</span>
                                </div>
                                <button className="btn btn-primary btn-lg btn-block"  >SignUp</button>
                                <button className="btn btn-light btn-lg btn-block " onClick={SignIn} style={{ marginLeft: '20px' }} >SignIn</button>

                            </div>
                        </div>
                    </div>
                </form>

            </section>
            <ToastContainer />
        </div>
    )
}

export default SignUp;
