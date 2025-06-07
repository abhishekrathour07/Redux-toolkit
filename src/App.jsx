import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './store/slicer/CounterSlice';

const App = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='text-xl bg-slate-700 h-screen space-y-4 flex flex-col items-center justify-center'>
      <h1 className='text-white'>Todo List by using Redux setup</h1>
      <h1 className='text-3xl font-bold'>{counter}</h1>
      <div className='flex gap-4 mt-4'>
        <button className='px-4 border py-2' onClick={() => dispatch(increment())}>Increment</button>
        <button className='px-4 border py-2' onClick={() => dispatch(decrement())}>decrement</button>
        <button className='px-4 border py-2' onClick={() => dispatch(reset())}>Reset</button>
      </div>

    </div>
  )
}

export default App
