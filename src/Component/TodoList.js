import React, { useState } from 'react'
import Popup from './Popup';

function TodoList() {


    // Form Show And Hide Start
    const PopShow = () => {
        document.getElementById('ShowPop').style.display = "block";
    }
    const ClosePop = () => {
        document.getElementById('ShowPop').style.display = "none";
        document.getElementById('UpdatePopShow').style.display = "none";

    }

    const [fnameBlankError, SetfnameBlankError] = useState();
    const [LNameBlankError, SetLNameBlankError] = useState();
    const [EmailBlankError, SetEmailBlankError] = useState();
    const [PhoneBlankError, SetPhoneBlankError] = useState();


    // Form Show And Hide End


    const [toDo, settoDo] = useState([]);
    const [UpdateTodo, SetUpdateTodo] = useState([])
    const [NewTsak, SetNewTask] = useState('');
    const [UpdateData, SetUpdateData] = useState('');




    // Update Value Start
    const [UserUpdateValue, SetUserUpdateValue] = useState();
    const [FnameUpdateValue, SetFnameUpdateValue] = useState();
    const [LNameUpdateValue, SetLNameUpdateValue] = useState();
    const [TNameUpdateValue, SetTNameUpdateValue] = useState();

    // Inpute Value Data
    const [UserNameDataInpute, SetUserNameDataInpute] = useState("");
    const [FnameDataInpute, SetFnameDataInpute] = useState("");
    const [LNameDataInpute, SetLNameDataInpute] = useState("");
    const [TaskDataInpute, SetTaskDataInpute] = useState("");



    // Form OnSubmite Fuction Star
    const ValidationForm = (event) => {
        event.preventDefault();

        //Form VAlidation all Text Box  


        if (event.target.UserName.value == "") {
            SetfnameBlankError("*Enter Your User Name")

        }


        if (event.target.FirstName.value == "") {
            SetLNameBlankError("*Enter Your First Name")

        }

        if (event.target.LastName.value == "") {
            SetEmailBlankError("*Enter Your Last Name")

        }

        if (event.target.TaskName.value == "") {
            SetPhoneBlankError("*Enter YourTask Name")
            return true
        }





        var num = toDo.length + 1;

        var AllDAta = {
            id: num,
            UserName: event.target.UserName.value,
            FirstName: event.target.FirstName.value,
            LastName: event.target.LastName.value,
            TaskName: event.target.TaskName.value,
        }


        // console.log(event.target.UserName.value)
        settoDo([...toDo, AllDAta])

        ClosePop();
        SetUserNameDataInpute("")
        SetFnameDataInpute("")
        SetLNameDataInpute("")
        SetTaskDataInpute('')
        UpdateValueForm()
    }

    const UpdateValueForm = (event) => {

        event.preventDefault();
        ClosePop()
        var UpdateNum = UpdateTodo.length + 1;
        console.log(UpdateNum)
        var UpdateAllData = {

            id: UpdateNum,
            UserName: event.target.UserName.value,
            FirstName: event.target.FirstName.value,
            LastName: event.target.LastName.value,
            TaskName: event.target.TaskName.value,
        }
        settoDo([...toDo, UpdateAllData])

        // let filterRecode=[...toDo].filter(task)
        // console.log(event.id)   
    }


    const UserOnChaneValidation = (event) => {
        if (event.target.value == "") {
            SetfnameBlankError("*Enter Your User Name")
        }
        else {
            SetfnameBlankError('')
        }
    }


    const FNameOnChaneValidation = (event) => {
        if (event.target.value == "") {
            SetLNameBlankError("*Enter Your First Name")
        }
        else {
            SetLNameBlankError("")
        }
    }

    const LnameeOnChaneValidation = (event) => {
        if (event.target.value == "") {
            SetEmailBlankError("*Enter Your Last Name")
        }
        else {
            SetEmailBlankError("")
        }
    }
    const TaskNameOnChaneValidation = (event) => {
        if (event.target.value == "") {
            SetPhoneBlankError("*Enter YourTask Name")
        }
        else {
            SetPhoneBlankError("")
        }
    }



    return (

        <div>

            <Popup

                ValidationForm={ValidationForm}
                settoDo={settoDo}
                toDo={toDo}
                NewTsak={NewTsak}
                SetNewTask={SetNewTask}


                SetUpdateData={SetUpdateData}
                UpdateData={UpdateData}

                // Colse And Open PopUp
                PopShow={PopShow}
                ClosePop={ClosePop}

                // Inpute VAlue Blank After Submite
                UserNameDataInpute={UserNameDataInpute}
                SetUserNameDataInpute={SetUserNameDataInpute}
                FnameDataInpute={FnameDataInpute}
                SetFnameDataInpute={SetFnameDataInpute}
                LNameDataInpute={LNameDataInpute}
                SetLNameDataInpute={SetLNameDataInpute}
                TaskDataInpute={TaskDataInpute}
                SetTaskDataInpute={SetTaskDataInpute}
                UpdateValueForm={UpdateValueForm}




                // After Update VAlue State
                UserUpdateValue={UserUpdateValue}
                SetUserUpdateValue={SetUserUpdateValue}
                FnameUpdateValue={FnameUpdateValue}
                SetFnameUpdateValue={SetFnameUpdateValue}
                LNameUpdateValue={LNameUpdateValue}
                SetLNameUpdateValue={SetLNameUpdateValue}
                SetTNameUpdateValue={SetTNameUpdateValue}
                TNameUpdateValue={TNameUpdateValue}



                UpdateTodo={UpdateTodo}
                SetUpdateTodo={SetUpdateTodo}


                //Validation Form Error Props
                fnameBlankError={fnameBlankError}
                LNameBlankError={LNameBlankError}
                EmailBlankError={EmailBlankError}
                PhoneBlankError={PhoneBlankError}


                UserOnChaneValidation={UserOnChaneValidation}
                FNameOnChaneValidation={FNameOnChaneValidation}
                LnameeOnChaneValidation={LnameeOnChaneValidation}
                TaskNameOnChaneValidation={TaskNameOnChaneValidation}
            />
        </div>


    )
}
export default TodoList;
