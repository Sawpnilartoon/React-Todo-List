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


    // Main Array Of Object  State ||UserName||FName||LName Array Of Object

    const [TodoData, SetTodoData] = useState(GetDataFromLS());
    
    // Button Update And Sub Change
    const[UpdateBtn,SetUpdateBtn]=useState('Submite')
    const[Title,SetTitle]=useState("Add List")


    // Inpute Fild State Start
    const [UserName, SetUserName] = useState('');
    const [FName, SetFName] = useState('');
    const [LName, SetLName] = useState('');
    // Inpute Fild State End


    // Validation Error Sate
    const [fnameBlankError, SetfnameBlankError] = useState();
    const [LNameBlankError, SetLNameBlankError] = useState();
    const [EmailBlankError, SetEmailBlankError] = useState();




    // Form Submit
    const handleAddTodoData = (e) => {
        e.preventDefault();

        // Form VAlidation Start

        if (e.target.UserName.value === "") {
            SetfnameBlankError("*Enter Your User Name")

        }


        if (e.target.FirstName.value === "") {
            SetLNameBlankError("*Enter Your First Name")

        }

        if (e.target.LastName.value === "") {
            SetEmailBlankError("*Enter Your Last Name")
            return true
        }


        let Todo = {
            UserName,
            FName,
            LName
        }
        // Push Data In main Array TodoData in Todo Object 
        SetTodoData([...TodoData, Todo]);

        // After Submite Data Blank Inpute Fild
        SetUserName('');
        SetFName('');
        SetLName('');

        ClosPopForm()

    }

// VAlidatio OnChange
const UserOnChaneValidation = (event) => {
    if (event.target.value === "") {
        SetfnameBlankError("*Enter Your User Name")
    }
    else {
        SetfnameBlankError('')
    }
}

const FNameOnChaneValidation = (event) => {
    if (event.target.value === "") {
        SetLNameBlankError("*Enter Your First Name")
    }
    else {
        SetLNameBlankError("")
    }
}

const LnameeOnChaneValidation = (event) => {
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
        SetUserName(Todo.UserName)
        SetFName(Todo.FName)
        SetLName(Todo.LName)
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

                        <div className="form-group row" >
                            <input type="text" placeholder="Enter UserName" id="UserName" value={UserName}
                                onChange={(e) => {SetUserName(e.target.value);UserOnChaneValidation(e)}} />
                                <span style={{ color: "red" }}>{fnameBlankError}</span>
                        </div>

                        <div className="form-group row" >
                            <input type="text" placeholder="Enter First Name" id="FirstName" value={FName}
                                onChange={(e) => {SetFName(e.target.value);FNameOnChaneValidation(e)}} />
                                <span style={{ color: "red" }}>{LNameBlankError}</span>
                        </div>

                        <div className="form-group row" >
                            <input type="text" placeholder="Enter Last Name" id="LastName" value={LName}
                                onChange={(e) => {SetLName(e.target.value);LnameeOnChaneValidation(e)}} />

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
                                        <th scope="col">Fisrt name</th>
                                        <th scope="col">Last name</th>
                                        <th scope="col">Delete</th>
                                        <th scope="col">Edite</th>
                                        <th scope='col'>  <div className="input-group mb-3" style={{ marginTop: '20%', marginLeft: '20%' }}>
                                            <button className="btn text-white btn-info " onClick={()=>{PopShow();SetUpdateBtn("Submite");SetTitle('Add List')}} type="button" id="button" >Add</button>
                                        </div></th>


                                    </tr>
                                </thead>

                                <tbody>
                                    {TodoData.map((Todo, id) => (
                                        <tr key={id }>
                                            <td>{id }</td>
                                            <td>{Todo.UserName}</td>
                                            <td>{Todo.FName}</td>
                                            <td>{Todo.LName}</td>
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
                                {
                                    TodoData.length > 0 &&
                                    <div className="input-group mb-3" style={{ marginTop: '5%', display: 'flex', justifySelf: 'center', marginLeft: '200%' }}>
                                    <button className="btn text-white btn-danger " onClick={() => { SetTodoData([]) }} type="button" id="button" >Remove All Data</button>
                                    
                                    </div>
                                }

                            </table>






                            {/*Show Mass No Task Start */}
                            {TodoData.length < 1 &&
                                <div style={{ color: 'white', paddingTop: '20px', padding: '0px 0px 20px 0px' }}>
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
