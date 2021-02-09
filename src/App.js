import { useState } from 'react';
import './App.css';
import FormComp from './FormComp';
import TodoComp from './TodoComp';
import { Divider, Typography } from '@material-ui/core';

function App() {

  const [todos,setTodo] = useState([
    
  ]);

  const deleteTodo = (id) =>
  {
    setTodo(todos.filter((todo) => todo.id!==id  ))  
  }

  const editModeToggle = (id) =>
  {
    
    setTodo(todos.map( (todo) => todo.id === id&&todo.strikeThrough===false ? {...todo,editMode:!todo.editMode} : todo));
    
  }

  const checkChg = (id) =>
  {
    setTodo(todos.map( (todo) => todo.id === id ? {...todo,strikeThrough:!todo.strikeThrough} : todo));  
  }

  const changeThisTodo =(newVal,id) =>
  {
    
    let newTodo = [...todos];
    newTodo.forEach( (tod) => 
    {
      if(tod.id === id)
      {
        tod.data = newVal;
      }
    })
    setTodo(newTodo);
    //setTodo(todos.filter((todo) => todo.id === id ? {...todo,data:newVal} : todo) )
  }

  return (
    <div className="root">
      <Typography variant={'h2'} style={{marginTop:'30px'}} className="title">Notes</Typography>
      <FormComp todos={todos} setTodo={setTodo} />   

      {todos &&
        todos.map( (todo) => {
                  return(
                    <>
                      <TodoComp key={todo.id} todos={todos} setTodo={setTodo} todo={todo} deleteTodo={deleteTodo} editModeToggle={editModeToggle} checkChg={checkChg} changeThisTodo={changeThisTodo}/>
                      <Divider style={{margin:'auto',width:'370px',background: 'linear-gradient(to bottom, #005aa7, #fffde4)'}}/>
                    </>
                        )
        }) 
      }

    </div>
  );
}

export default App;
