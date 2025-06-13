import React from 'react'
import ReactDOM from 'react-dom/client'
import 'tailwindcss/tailwind.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-500">
        Electron + React + Tailwind
      </h1>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click Me
      </button>
    </div>
  </React.StrictMode>
)