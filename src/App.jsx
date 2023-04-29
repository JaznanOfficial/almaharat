import { useState } from 'react'
import './App.scss'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
      <main className='h-[3000px]'></main>
    </>
  )
}

export default App
