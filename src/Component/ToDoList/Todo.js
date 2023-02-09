import '../Scss/Todo.css';
import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Todo() {
    // Show Form First Time
    const PopShow = () => {
        document.getElementById('ShowPop').style.display = "block";
        
    }

    // Pop Form Hide 
    const ClosPopForm = () => {
        document.getElementById('ShowPop').style.display = "none";
    }


    // Getting The Value of Local Stroge 
    const GetDataFromLS = () => {

        const LocalStorageData = localStorage.getItem('TodoData')
        if (LocalStorageData) {
            // DAta COnvert In Object Formet
            return JSON.parse(LocalStorageData)
        }
        else {
            return []
        }
    }


    // Main Array Of Object  State ||UserName||Name||Task Array Of Object

    const [TodoData, SetTodoData] = useState(GetDataFromLS());
    
    // Button Update And Sub Change
    const[UpdateBtn,SetUpdateBtn]=useState('Submite')
    const[Title,SetTitle]=useState("Add List")


    // Inpute Fild State Start
    // const [UserName, SetUserName] = useState('');
    const [Name, SetName] = useState('');
    const [Task, SetTask] = useState('');
    // Inpute Fild State End


    // Validation Error Sate
    const [NameBlankError, SetNameBlankError] = useState();
    const [TaskBlankError, SetTaskBlankError] = useState();
    const [EmailBlankError, SetEmailBlankError] = useState();




    // Form Submit
    const handleAddTodoData = (e) => {
        e.preventDefault();

        // Form VAlidation Start

        // if (e.target.UserName.value === "") {
        //     SetNameBlankError("*Enter Your User Name")

        // }


        if (e.target.FirstName.value === "") {
            SetTaskBlankError("*Enter Your First Name")

        }

        if (e.target.LastName.value === "") {
            SetEmailBlankError("*Enter Your Last Name")
            return true
        }


        let Todo = {
            UserName:localStorage.getItem("Login_Emial"),
            Name,
            Task
        }
        // Push Data In main Array TodoData in Todo Object 
        SetTodoData([...TodoData, Todo]);

        // After Submite Data Blank Inpute Fild
        // SetUserName('');
        SetName('');
        SetTask('');

        ClosPopForm()

    }

// VAlidatio OnChange
const UserOnChaneValidation = (event) => {
    if (event.target.value === "") {
        SetNameBlankError("*Enter Your User Name")
    }
    else {
        SetNameBlankError('')
    }
}

const NameOnChaneValidation = (event) => {
    if (event.target.value === "") {
        SetTaskBlankError("*Enter Your First Name")
    }
    else {
        SetTaskBlankError("")
    }
}

const TaskeOnChaneValidation = (event) => {
    if (event.target.value === "") {
        SetEmailBlankError("*Enter Your Last Name")
    }
    else {
        SetEmailBlankError("")
    }
}




    // Delete Fuction 
    const DeleteTodoData = (id) => {
    
        const FilterTodoDataLs = TodoData.filter((element, index) => {
            return index !== id
        })
        SetTodoData(FilterTodoDataLs);
    }

    // Start Edite Fuction

    const EditeTodoData=(Todo)=>{

       SetUpdateBtn("Update")
       SetTitle("Edite List")
        // SetUserName(Todo.UserName)
        SetName(Todo.Name)
        SetTask(Todo.Task)
        PopShow();
   }

const EditeDilet=(id)=>{

 const FilterTodoDataLsd = TodoData.filter((element, index) => {
            return index !== id
        })
        SetTodoData(FilterTodoDataLsd);
    }
   
        // End Edite Fuction

    // Savin And Push Data In LocalStorage 
    useEffect(() => {
        localStorage.setItem('TodoData', JSON.stringify(TodoData));
    }, [TodoData])







    return (
        <div>

            <div className="container mt-4 maincontainer">

                <div className="main" id='ShowPop'  >
                    <div className="title" ><span>{Title}</span></div>


                    <form className="form-group"
                        onSubmit={handleAddTodoData}
                    >

                       {/*<div className="form-group row" >
                            <input type="text" placeholder="Enter UserName" id="UserName" value={UserName}
                                onChange={(e) => {SetUserName(e.target.value);UserOnChaneValidation(e)}} />
                                <span style={{ color: "red" }}>{NameBlankError}</span>
                        </div>*/}

                        <div className="form-group row" >
                            <input type="text" placeholder="Enter Name" id="FirstName" value={Name}
                                onChange={(e) => {SetName(e.target.value);NameOnChaneValidation(e)}} />
                                <span style={{ color: "red" }}>{TaskBlankError}</span>
                        </div>

                        <div className="form-group row" >
                            <input type="text" placeholder="Enter Task" id="LastName" value={Task}
                                onChange={(e) => {SetTask(e.target.value);TaskeOnChaneValidation(e)}} />

                                <span style={{ color: "red" }}>{EmailBlankError}</span>
                        </div>

                        <div className="row button">
                            <input type="submit" value={UpdateBtn} />
                        </div>

                        <div className="row button">
                            <button className="btn text-white btn-danger " onClick={ClosPopForm} type="button" id="button" >Close</button>
                        </div>

                    </form>
                </div>


                {/*########################  Table  All Data Show in This Table   ###################################################### */}

                {/*{
                    TodoData.length> 0 &&
                }*/}


                <div className="container">
                    <div className="mx-auto  mb-3" style={{ background: 394758}}>

                        <div className="table table-responsive" style={{ background: 'black' }}>
                            <div className="input-group mb-3" style={{ display: 'flex', justifyContent: 'center' }} >
                            </div>

                            <table className="table table-dark"  >

                                <thead className=''>
                                    <tr className='table-dark"'>
                                        <th scope="col">No.</th>
                                        <th scope="col">UserName</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Task</th>
                                        <th scope="col">Delete</th>
                                        <th scope="col">Edite</th>
                                        <th scope='col'>  <div className="input-group mb-3" style={{ marginTop: '20%', marginLeft: '20%' }}>
                                            <button className="btn text-white btn-info " onClick={()=>{PopShow();SetUpdateBtn("Submite");SetTitle('Add List')}} type="button" id="button" >Add</button>
                                        </div></th>


                                    </tr>
                                </thead>

                                <tbody>
                                    {TodoData.filter(Todo=>Todo.UserName === localStorage.getItem("Login_Emial")).map((Todo, id) => (
                                        <tr key={id }>
                                            <td>{id }</td>
                                            <td>{Todo.UserName}</td>
                                            <td>{Todo.Name}</td>
                                            <td>{Todo.Task}</td>
                                            <td>
                                                <button type="button" className="btn btn-danger" onClick={() => DeleteTodoData(id)}>Delete</button>
                                            </td>

                                            <td>
                                                <button type="button" className="btn btn-info"  onClick={()=>{EditeDilet(id);EditeTodoData(Todo)}}
                                                >Edite</button>
                                            </td>
                                            <td></td>
                                        </tr>
                                    ))}
                                </tbody>

                                {/*All List Delete Button And Fuction Start*/}
                                
                                
                               {/*{  TodoData.length > 0 &&
                                    <div className="input-group mb-3" style={{ marginTop: '5%', display: 'flex', justifySelf: 'center', marginLeft: '200%' }}>
                                    <button className="btn text-white btn-danger " onClick={() => { SetTodoData([]) }} type="button" id="button" >Remove All Data</button>
                                    
                                    </div>
                                }*/}

                            </table>






                            {/*Show Mass No Task Start */}
                            {TodoData.filter(Todo=>Todo.UserName === localStorage.getItem("Login_Emial"))>0 &&
                                <div style={{ color: 'white', paddingTop: '20px',marginLeft:"40%" , padding: '0px 0px 20px 0px' }}>
                                    No Task....
                                </div>}
                            {/*Show Mass No Task End */}


                        </div>
                    </div>
                </div>

                {/*######################## END Table  All Data Show in This Table   ###################################################### */}


            </div>

        </div>
    )
}
