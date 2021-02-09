import React, { useState } from 'react';
import './FormComp.css'
import { Button, TextField } from '@material-ui/core';

const FormComp = ({ todos,setTodo }) => {

    const[val,setVal] = useState('');
    const handleChange = (e) =>
    {
        setVal(e.target.value);
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        let theID = val+Math.random()*1000;
        setTodo([ ...todos,{id:theID,data:val,editMode:false,strikeThrough:false} ]);
        setVal("");
    }



    return (
        <div className="frm">
            <form onSubmit={handleSubmit}>
                {/* <input type="text" value={val} onChange={handleChange}/> */}
                <TextField label="Type a Todo" variant="outlined" value={val} onChange={handleChange}/>
                <Button style={{height:'55px',marginLeft:'10px'}} variant="contained" color={'primary'} type="submit">Add Todo</Button> 
            </form>
        </div>
    )
}

export default FormComp;
