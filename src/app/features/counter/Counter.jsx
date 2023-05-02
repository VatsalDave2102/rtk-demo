import { useDispatch, useSelector } from "react-redux"
import { counterAction } from "./counterSlice"

 
export const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  return (
  <section>
    <p>{count}</p>
    <div className="">
    <button onClick={()=> dispatch(counterAction.increment())}>+</button>
    <button onClick={()=> dispatch(counterAction.decrement())}>-</button>

    </div>
  </section>    
  )
}
