import React from 'react'



const View = (props)=>{
    return(
        <>
                   
             <tr>
             <td>{props.to}</td>
             <td>{props.da}</td>
             <td>{props.ta}</td>
             <td><button className="btn btn-danger" onClick={()=>{props.onSelect(props.id)}}>Delete Me</button></td>
            </tr>
    
        </>
    
    );
}

export default View;