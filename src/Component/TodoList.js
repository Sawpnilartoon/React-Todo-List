import React, { useState } from 'react'
import Popup from './Popup';

function TodoList() {


    // Form Show And Hide Start
    const PopShow = () => {
        document.getElementById('ShowPop').style.display = "block";
    }
    const ClosePop = () => {
        document.getElementById('ShowPop').style.display = "none";
    }
    // Form Show And Hide End


    const [toDo, settoDo] = useState([]);
    const [NewTsak, SetNewTask] = useState('');

    const ValidationForm = (event) => {
        event.preventDefault();
        var num = toDo.length+1;
        
        var AllDAta = {
            id: num,
            UserName: event.target.UserName.value,
            FirstName: event.target.FirstName.value,
            LastName: event.target.LastName.value,
            TaskName: event.target.TaskName.value,
        }
        settoDo([...toDo, AllDAta])
        ClosePop();
        
    }
    

    return (

        <div>

            <Popup
                ValidationForm={ValidationForm}
                settoDo={settoDo}
                toDo={toDo}
                NewTsak={NewTsak}
                PopShow={PopShow}
                ClosePop={ClosePop}
               
                
            />
        </div>


    )
}
export default TodoList;
