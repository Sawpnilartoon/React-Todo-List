import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const Logout=()=>{
    let path = `/SignUp`;
    navigate(path);
    localStorage.removeItem("Login_Emial")
    localStorage.removeItem("Login_UserName")
  }
  return (
    <div>

      <section className="vh-10">

        <div className="container py-5 h-100">
          <p></p>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">

              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body text-center " style={{ height: "400px" }}>
                  <h1 className="blockquote text-center"><b>Welcom</b></h1>

                  <div className="mt-3 mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded-circle img-fluid" style={{ width: "100px" }} />
                  </div>
                  <h4 className="mb-2">{localStorage.getItem("Login_Emial")}</h4>
                  <p className="text-muted mb-4">{localStorage.getItem("Login_UserName")}</p>
                  <button type="button" className="btn btn-danger btn-rounded btn-lg" onClick={Logout}><b>Logout</b></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
