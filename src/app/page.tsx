import React from 'react'
import { HelloButton } from "../components/HelloButton";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-500">
        Electron + TypeScript + React + Tailwind
      </h1>
      <HelloButton />
    </div>
  )
}