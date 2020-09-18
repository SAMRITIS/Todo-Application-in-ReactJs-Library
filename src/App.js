
import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import View from './View'
function App() {
  const [time, timeChange] = useState('');
  const [todo, todoChange] = useState('');
  const [task, taskChange] = useState([]);
  const deleteItem = id =>{
    taskChange((old)=>{
      return old.filter((arrEle, index)=>{
        return index !== id;
      });
    });
  };
  const todoH = e =>{
    todoChange(e.target.value);
  } 
  const timeH = e =>{
     timeChange(e.target.value);  
  }
 
  const handle = e =>{
    e.preventDefault();
     
    //Here for access only times 
    var a = time.split('T');
    var b = a[0];
    var c = a[1];
    
    taskChange((old)=>{
       
         return [...old, ['todo', todo, 'date', b, 'time', c]]
    })
    todoChange('');
    timeChange('');
  }
  return (
    
    <>
     
      <div className="mx-auto shadow-none p-3 mb-5 bg-light rounded" style={{width: 600, height:200,  marginTop: 100}}>
      <div className="card text-center">
      <div className="card-header p-3 mb-2 bg-primary text-white"><h4 className="display-4">To-Do App</h4></div>
      <div className="card-body">
      <h3 className="card-title">Add To-Do</h3>
      <input type="text" value ={todo} onChange={todoH} placeholder="Write To-Do Here..." required/><br/><br/>
      <input type="datetime-local"  value ={time} onChange={timeH}></input><br/><br/>
      <button onClick={handle} className="btn btn-success">Add Me</button><br/>
      <br/>
      <table className="table table-striped">
      <thead>
      <tr>
        <th>To Do</th>
        <th>Time</th>
        <th>Date</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>

      {task.map((element, index)=>{
        return(
         <View to={element[1]} da={element[3]} ta={element[5]} key={index} id={index} text={element} onSelect={deleteItem}/>
        );
      })}
      </tbody>
      </table> 
     </div>
      </div>
      </div>
    </>
  );
}

export default App;