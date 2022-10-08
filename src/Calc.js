import React, {useState} from 'react'
import "./style.css"
const Calc = () => {
const [num,setNum] = useState("")

const Calculate = () => {
  try{
  setNum(eval(num))
}
  catch(error){
    setNum(" syntax error")
}
}

const Del = () => {
  try{
  setNum(num.slice(0,-1))
  }
  catch(error){
    setNum("")
  }
}

const Clear = () => {
  setNum("")
}

  return(
    <div className="container">
      <div className="outputDiv">
      <input className="output" type="text" value={num} readOnly />
      </div>
    <div className="buttonCont">
<button className="button button1" value="1" onClick={(e) => setNum(num + e.target.value)}> 1  </button>


<button className="button button2" value="2" onClick={(e) => setNum(num + e.target.value)}> 2 </button>   

<button className="button button3" value="3" onClick={(e) => setNum(num + e.target.value)} > 3 </button>

<button className="button button4" value="4" onClick={(e) => setNum(num + e.target.value)} > 4 </button>

<button className="button button5" value="5" onClick={(e) => setNum(num + e.target.value)} > 5 </button>

<button className="button button6" value="6" onClick={(e) => setNum(num + e.target.value)} > 6 </button>

<button className="button button7" value="7" onClick={(e) => setNum(num + e.target.value)} > 7 </button>

<button className="button button8" value="8" onClick={(e) => setNum(num + e.target.value)} > 8 </button>

<button className="button button9" value="9" onClick={(e) => setNum(num + e.target.value)} > 9 </button>

<button className="button button0" value="0" onClick={(e) => setNum(num + e.target.value)} > 0 </button>

<button className="button buttonp" value="." onClick={(e) => setNum(num + e.target.value)} > . </button>

<button className="button buttonAdd" value="+" onClick={(e) => setNum(num + e.target.value)} > + </button>

<button className="button buttonSub" value="-" onClick={(e) => setNum(num + e.target.value)} > - </button>

<button className="button buttonDiv" value="/" onClick={(e) => setNum(num + e.target.value)} > / </button>

<button className="button buttonTim" value="*" onClick={(e) => setNum( num + e.target.value)} > * </button>

<button className="button buttone" onClick={() => Calculate()} > = </button>

<button className="button buttond" onClick={ () => Del()} > DEL </button>

<button className="button buttonc" onClick={() => Clear()} > C </button>

    </div>
    </div>
  )
}

export default Calc