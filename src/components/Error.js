import React from 'react'
const Error = ({mensaje}) => {
    return ( 
        <div className="error alert alert-danger">{mensaje}</div>
     );
}
 
export default Error;