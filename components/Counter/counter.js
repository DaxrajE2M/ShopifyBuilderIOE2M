import React, { useState } from 'react'

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
