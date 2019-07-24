import React from "react";
const User=(props)=>{
    
    return(
          <div>
              <h3>Welcome {props.name}</h3>
              <button onClick={props.clickdata}>Logout</button>
          </div>
    );
}
export default User;