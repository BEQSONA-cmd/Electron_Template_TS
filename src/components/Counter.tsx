import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button 
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={() => setCount(count + 1)}
    >
      Click Me ({count})
    </button>
  )
}