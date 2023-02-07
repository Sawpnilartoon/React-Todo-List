import React from 'react'

function SignUp() {
    return (
        <div>
            <div>
                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <h1 className="row d-flex align-items-center justify-content-center"> Sign Up</h1>
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    className="img-fluid" />
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form1Example13">User Name</label>
                                    <input type="text" id="UserName" className="form-control form-control-lg"
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form1Example13">Email address</label>
                                    <input type="text" id="Emial" className="form-control form-control-lg"
                                    />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form1Example23">Password</label>
                                    <input type="password" id="Password" className="form-control form-control-lg" />
                                </div>
                                <button className="btn btn-primary btn-lg btn-block">SignUp</button>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SignUp
