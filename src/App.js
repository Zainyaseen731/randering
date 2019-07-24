import React,{useState} from "react";
import User from "./User";
import Guest from "./Guest";

const App=(props)=>{
  //  const isRejister=props.consumer;
  /*  if(isRejister){                                             //ifesle
     return <User/>
    }
    else{
        return <Guest/>
    }*/
   /* return (
        <>
        <h1>Welcome Zain</h1>
        {isRejister && <User/>}
        </>
    )*/
    const [value,setValue]=useState(false);
    const value1=value;

    const clicklogin=()=>{
        setValue (true)
       // console.log("value1")
       
    }

    const clicklogout=()=>{
        setValue (false)
    }

    if(value1){                                          
        return <User name="zain" clickdata={clicklogout}/>
       }
       else{
           return <Guest clickdata={clicklogin}/>
       }
}
export default App;
