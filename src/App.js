import { useState } from 'react';
import './App.css';

function App() {
  const[result,setResult]=useState(0);
  const[input,setInput]=useState('');
  const[resultStatus,setresultStatus]=useState(false);

  function handleClick(value){
    setInput((prev)=>prev+value);
  }
  function calculateResult(){
    setresultStatus(true);
    if(input===""){
      setResult("Error");
    }
    else{
    setResult(eval(input));
    }
  }
function clearInput(){
  setInput('');
  setResult(0);
  setresultStatus(false);
}
  return (
    <div className="App" style={{display:"flex",
                                flexDirection:"column",
                                justifyContent:'center',
                                alignItems:'center',
                                height:"100vh",
                                width:"100vw%",
                              }}>
      <div className='container' style={{display:"flex",
                                 flexDirection:"column",
                                 justifyContent:"center",
                                 alignItems:'center',
                                 backgroundImage:"linear-Gradient(to right,lightblue,yellow)",
                                 height:"50vh",
                                 width:"30vw",
                                 boxShadow:"5px 5px 5px",
                                 border:"none",
                                 borderRadius:"7px"}}>
                                 
      <h1>React Calculator</h1>
      <input type="text" id="display" value={input} readOnly/>
      { resultStatus ? <div style={{marginTop:"1em"}}>{result}</div> : null }
      <div className='button-container' style={{display:"grid",
                                                gridTemplateColumns:"repeat(4, 1fr)",
                                                width:"15vw",
                                                height:"25vh",
                                                gap:".3em",
                                                marginTop:"1em",
                                                }}>
        <button type="button" onClick={()=>handleClick('7')} value="7">7</button>
        <button type="button" onClick={()=>handleClick('8')} value="8">8</button>
        <button type="button" onClick={()=>handleClick('9')} value="9">9</button>
        <button type="button" onClick={()=>handleClick('+')} value="+">+</button>
        <button type="button" onClick={()=>handleClick('4')} value="4">4</button>
        <button type="button" onClick={()=>handleClick('5')} value="5">5</button>
        <button type="button" onClick={()=>handleClick('6')} value="6">6</button>
        <button type="button" onClick={()=>handleClick('-')} value="-">-</button>
        <button type="button" onClick={()=>handleClick('1')} value="1">1</button>
        <button type="button" onClick={()=>handleClick('2')} value="2">2</button>
        <button type="button" onClick={()=>handleClick('3')} value="3">3</button>
        <button type="button" onClick={()=>handleClick('*')} value="*">*</button>
        <button type="button" onClick={clearInput} value="C">C</button>
        <button type="button" onClick={()=>handleClick('0')} value="0">0</button>
        <button type="button" onClick={calculateResult} value="=">=</button>
        <button type="button" onClick={()=>handleClick('/')} value="/">/</button>
      </div>
      </div>
    </div>
  );
}

export default App;
