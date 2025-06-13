import React from 'react'
import { Counter } from "../components/Counter";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-500">
        Electron + React + Tailwind
      </h1>
      <Counter />
    </div>
  )
}