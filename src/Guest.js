import React from "react";
const Guest=(props)=>{
    return(
          <div>
              <h1>Welcome Guest</h1>
              <button onClick={props.clickdata}>Login</button>
              <button>Singup</button>
          </div>
    );
}
export default Guest;