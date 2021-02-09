import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Typography,TextField } from '@material-ui/core';
import './TodoComp.css'

const TodoComp = ( { todo,deleteTodo,editModeToggle,checkChg,changeThisTodo } ) => {

    let todoIs = null;
    if(!todo.editMode)
    {
        if(todo.strikeThrough)
        {
            todoIs = (
            <div className="roothere">
            <input style={{marginRight:'10px'}} type="checkbox" checked onChange={() => checkChg(todo.id)}></input>
            <strike><Typography>{todo.data}</Typography></strike>
            <Button color={'primary'} style={{marginLeft:'5px'}} onClick={() => editModeToggle(todo.id)}>Edit</Button>
            <Button color={'secondary'} style={{marginLeft:'5px'}} onClick={() => deleteTodo(todo.id)}>Delete</Button>
            </div>
            )
        }
        else
        {
              todoIs = (
            <div className="roothere">
            <input style={{marginRight:'10px'}} type="checkbox" onChange={() => checkChg(todo.id)}></input>
            <Typography >{todo.data}</Typography>
            <Button color={'primary'} style={{marginLeft:'5px'}} onClick={() => editModeToggle(todo.id)}>Edit</Button>
            <Button color={'secondary'} style={{marginLeft:'5px'}} onClick={() => deleteTodo(todo.id)}>Delete</Button>
            </div>
            )
        }
    }
    else
    {
        todoIs = (
        <div className="roothere">
        <TextField label="Edit Todo" variant="outlined" value={todo.data} onChange={(e) => changeThisTodo(e.target.value,todo.id)}/>
        <Button  color={'primary'} style={{margin:'5px',height:'55px'}} onClick={() => editModeToggle(todo.id)}>Update</Button>
        </div>
        )
    }

    return (
        <div className="roothere">
           {todoIs}
        </div>
    )
}
export default TodoComp;
