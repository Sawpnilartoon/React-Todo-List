import '../Component/Scss/Style.css'
export default function Popup(props) {
  


    return (
        <div className="container-fluid " >

      

        <div className="container mt-4 maincontainer">

            <div className="main" id='ShowPop' >
                <div className="title" ><span>Add List</span></div>
                <form onSubmit={props.ValidationForm}>

                    <div className="form-group row" >
                        <input type="text"  id="UserName" placeholder="Enter UserName" />
                    </div>

                    <div className="form-group row" >
                    <input type="text" id="FirstName" placeholder="Enter First Name" />
                    </div>
                    
                    <div className="form-group row" >
                    <input type="text" id="LastName"  placeholder="Enter Last Name" />
                    </div>
                    <div className="form-group row" >
                    <input type="text" id="TaskName"  placeholder="Enter Your Task Name" />
                    </div>

                    <div className="row button">
                        <input type="submit" value="Submit" />
                    </div>
                    <div className="input-group mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="btn text-white btn-danger " onClick={props.ClosePop}type="button" >Close</button>
                    </div>

                </form>


            </div>
        </div>

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
                            <th scope='col'>  <div className="input-group mb-3" style={{marginTop:'10%',marginLeft:'20%' }}>
                            <button className="btn text-white btn-info " onClick={props.PopShow} type="button" id="button-addon2" >+</button>
                        </div></th>
                        </tr>

                        {/*Map Start All DAta Show Start */}
                        <tbody>
                        {props.toDo 
                            .map((task,index)=>{
                                var newindex=index+1
                                return(
                                    <tr>
                                    {/* <th scope="col">{index}</th>*/}
                                    <td>{task.id}</td>
                                    <td>{task.UserName}</td>
                                    <td>{task.FirstName}</td>
                                    <td>{task.LastName}</td>
                                    <td>{task.TaskName}</td>
                                    <td>{task.DeleteBtn}</td>
                                    <td>{<button className="btn btn-danger" onClick={()=>{
                                        var newtaskl= props.NewTsak
                                        var newtaskl = props.toDo.filter(task=>task.id !== newindex)
                                        props.settoDo(newtaskl)
                                        // console.log(task)

                                    }}>Delete</button>}</td>
                                    </tr>
                                    )
                            })
                            }
                          </tbody>
                          </table>
                        {/*Map Start All DAta Show End */}

                        {/*Show Mass No Task Start */}
                            <div style={{color:'white'}}>
                            { props.toDo.length ? "":'No Task....' }
                            </div>
                        {/*Show Mass No Task End */}


                </div>
            </div>
        </div>
    </div>
    )
}
