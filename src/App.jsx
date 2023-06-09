import './App.css'
import {useDispatch,useSelector} from "react-redux"
import {setIncrement,setDecrement} from "./Data/Reducer.js"
export default function App() {
  const dispatch=useDispatch()
  
  const state = useSelector(item=>item.data)
  const {number}=state

  const Increment=()=>{
    dispatch(setDecrement())
  }
  
  return (
    <main>
      {console.log(number)}
     <button onClick={()=>Increment()}>Increment</button>
    </main>
  )
}
