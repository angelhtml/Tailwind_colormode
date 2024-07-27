import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Markdown from './components/markdown'
import Slider from './components/slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='dark:bg-black dark:text-white'>
    <Navbar />
    <div className='h-14'></div>
    <Slider />
      <h1 className="text-3xl font-bold text-red-600">
      Tailwind
    </h1>
    <Markdown title="Hello"/>
    </div>
  )
}

export default App
