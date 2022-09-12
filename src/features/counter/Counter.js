import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,
         decrement,
         reset,
         incrementByAmount, 
         decrementByAmount 
} from './counterSlice';

const Counter = () => {
  const count = useSelector((state)=>state.counter.count);
  const dispatch = useDispatch();
  const [modifyAmount, setModifyAmount] = useState(0);
  const modValue = Number(modifyAmount) || 0;
  const resetAll = ()=>{
    setModifyAmount(0);
    dispatch(reset());
  }
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
      <div>
        <input 
          type="text" 
          value={modifyAmount}
          onChange={(e)=>setModifyAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={()=>dispatch(incrementByAmount(modValue))}>Add {modValue}</button>
        <button onClick={()=>dispatch(decrementByAmount(modValue))}>Remove {modValue}</button>
      </div>
      <div>
        <button onClick={()=>dispatch(resetAll())}>Reset</button>
      </div>
    </section>
  );
}

export default Counter