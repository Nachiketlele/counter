import React from "react";
function Counter(){
    const [count,setcount] = React.useState(0)
    return (
        <div>
               <h1  >Counter:<span id="h1">{count}</span></h1>
             
              <button onClick={()=>
              
                { setcount(count+1) 
                    if((count+1)%2==0){
                   document.getElementById("h1").style.color="green"
                } else{
                    document.getElementById("h1").style.color="red"
                }
                }}
                >Increament</button>
                 
                 
                 
                 
                  <button onClick={()=>{
                  if(count>0)
                  {setcount(count-1)}
                  if((count-1)%2==0){
                    document.getElementById("h1").style.color="green"
                 } else{
                     document.getElementById("h1").style.color="red"
                 }}}>Decreament</button>
              <button onClick={()=>{setcount(count*2)
              if(count%2==0){
                document.getElementById("h1").style.color="green"
             }}}>Double</button>
        </div>
       
    )
}
export {Counter}