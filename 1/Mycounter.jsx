import { useState } from "react";

function Mycounter(){
    const [name , setname] = useState("");
    const [age , setage] = useState();

    function handle1(e){
        setname(e.target.value);
    }
    function handle2(e){
        setage(e.target.value);
    }
    return(
            <div className="box">
              <input type="text" value ={name} onChange={handle1} className="inp" placeholder="your name"/>
              <input  type="number" value ={age} onChange={handle2} className="inp" placeholder="your age"/>
              <p className="txt">name : {name}</p>
              <p className="txt">age : {age}</p>
            </div>

    );

}
export default Mycounter
