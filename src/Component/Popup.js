import '../Component/Scss/Style.css'
export default function Popup(props) {
    const FormValid = (event) => {
        event.preventDefault();
        console.log(event.target.UserName.value)

        // if(event.target.LName.value===""){
        //     // SetLNameBlankError("*Enter Your Last Name")
        // }
        // if(event.target.Email.value===""){
        //     // SetEmailBlankError("*Enter Your Email")
        // }
        // if(event.target.number.value===""){
        //     // SetPhoneBlankError("*Enter Your Phone Number")
        // }
    }

    return (
        <div className="container-fluid " >



            <div className="container mt-4 maincontainer">

                <div className="main" id='ShowPop' >
                    <div className="title" ><span>Add List</span></div>
                    <form onSubmit={props.ValidationForm}>

                        <div className="form-group row" >
                            <input type="text" id="UserName" value={props.UserNameDataInpute} onChange={(e) => { props.SetUserNameDataInpute(e.target.value); props.UserOnChaneValidation(e) }} placeholder="Enter UserName" />
                            <span style={{ color: "red" }}>{props.fnameBlankError}</span>
                        </div>

                        <div className="form-group row" >
                            <input type="text" id="FirstName" value={props.FnameDataInpute} onChange={(e) => { props.SetFnameDataInpute(e.target.value); props.FNameOnChaneValidation(e) }} placeholder="Enter First Name" />
                            <span style={{ color: "red" }}>{props.LNameBlankError}</span>
                        </div>

                        <div className="form-group row" >
                            <input type="text" id="LastName" value={props.LNameDataInpute} onChange={(e) => { props.SetLNameDataInpute(e.target.value); props.LnameeOnChaneValidation(e) }} placeholder="Enter Last Name" />
                            <span style={{ color: "red" }}>{props.EmailBlankError}</span>
                        </div>

                        <div className="form-group row" >
                            <input type="text" id="TaskName" value={props.TaskDataInpute} onChange={(e) => { props.SetTaskDataInpute(e.target.value); props.TaskNameOnChaneValidation(e) }} placeholder="Enter Your Task Name" />
                            <span style={{ color: "red" }}>{props.PhoneBlankError}</span>
                        </div>

                        <div className="row button">
                            <input type="submit" value="Submit" onClick={props.removeData} />
                        </div>
                        <div className="input-group mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className="btn text-white btn-danger " onClick={props.ClosePop} type="button" >Close</button>
                        </div>

                    </form>


                </div>


                {/*#####################################################################################################################################################*/}

                {/* Update Data  Form*/}

                <div className="main" id='UpdatePopShow' >
                    <div className="title" ><span>Add Update List</span></div>
                    <form onSubmit={props.UpdateValueForm} >

                        <div className="form-group row" >
                            <input type="text" id="UserName"
                                value={props.UserUpdateValue}
                                onChange={(event) => {
                                    props.SetUserUpdateValue(event.target.value)
                                    // console.log(event.target.value)

                                }}
                                placeholder="Enter UserName" />

                        </div>

                        <div className="form-group row" >
                            <input type="text" id="FirstName" placeholder="Enter First Name"
                                value={props.FnameUpdateValue}
                                onChange={(event) => {
                                    props.SetFnameUpdateValue(event.target.value)
                                    // console.log(event.target.value)

                                }}
                            />
                        </div>

                        <div className="form-group row" >
                            <input type="text" id="LastName" placeholder="Enter Last Name"
                                value={props.LNameUpdateValue}
                                onChange={(event) => {
                                    props.SetLNameUpdateValue(event.target.value)
                                    // console.log(event.target.value)

                                }}
                            />

                        </div>
                        <div className="form-group row" >
                            <input type="text" id="TaskName" placeholder="Enter Your Task Name"
                                value={props.TNameUpdateValue}
                                onChange={(event) => {
                                    props.SetTNameUpdateValue(event.target.value)
                                    // console.log(event.target.value)

                                }}
                            />
                        </div>

                        <div className="row button">
                            <input type="submit" value="Update Data" />
                        </div>
                        <div className="input-group mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className="btn text-white btn-danger " onClick={props.ClosePop} type="button" >Close</button>
                        </div>

                    </form>


                </div>

            </div>


            {/*###############################################################################################################################*/}
            {/* Start Show Table Data And Map Function */}
            <div className="container">
                <div className="mx-auto  mb-3" style={{ background: 394758 }}>

                    <div className="table table-responsive" style={{ background: 'black' }}>
                        <div className="input-group mb-3" style={{ display: 'flex', justifyContent: 'center' }} >
                        </div>

                        <table className="table table-dark" >

                            <tr className='table-dark"'>
                                <th scope="col">No.</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Fisrt name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Task</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edite</th>
                                <th scope='col'>  <div className="input-group mb-3" style={{ marginTop: '10%', marginLeft: '20%' }}>
                                    <button className="btn text-white btn-info " onClick={props.PopShow} type="button" id="button-addon2" >+</button>
                                </div></th>
                            </tr>

                            {/*Map Start All DAta Show Start */}
                            <tbody>
                                {props.toDo
                                    .map((task, index) => {
                                        let newindex = task.id
                                        return (
                                            <tr>
                                                {/* <th scope="col">{index}</th>*/}
                                                <td>{task.id}</td>
                                                <td>{task.UserName}</td>
                                                <td>{task.FirstName}</td>
                                                <td>{task.LastName}</td>
                                                <td>{task.TaskName}</td>

                                                <td>{<button className="btn btn-danger" onClick={() => {
                                                    var NewTaskData = props.NewTsak
                                                    console.log(props.NewTsak)
                                                    console.log(newindex)
                                                    console.log(task.id)
                                                    var NewTaskData = props.toDo.filter(task => task.id !== newindex)
                                                    props.settoDo(NewTaskData)
                                                    // console.log(task)

                                                }}>Delete</button>}</td>

                                                {/*Edite BTN */}
                                                <td>{<button className="btn btn-info" onClick={() => {
                                                    document.getElementById('UpdatePopShow').style.display = "block";
                                                    props.SetUserUpdateValue(task.UserName);
                                                    props.SetFnameUpdateValue(task.FirstName);
                                                    props.SetLNameUpdateValue(task.LastName);
                                                    props.SetTNameUpdateValue(task.TaskName);
                                                    var NewTaskData = props.toDo.filter(task => task.id !== newindex)
                                                    props.settoDo(NewTaskData)

                                                }}>Edite</button>}</td>
                                                <td></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>


                        </table>
                        {/*Map Start All DAta Show End */}

                        {/*Show Mass No Task Start */}
                        <div style={{ color: 'white', paddingTop: '20px', padding: '0px 0px 20px 0px' }}>
                            {props.toDo.length || props.UpdateTodo.length ? "" : 'No Task....'}
                        </div>
                        {/*Show Mass No Task End */}


                    </div>
                </div>
            </div>
        </div>
    )
}
