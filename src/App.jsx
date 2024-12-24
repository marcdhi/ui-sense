import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'

function App() {
  

  return (
   <div className="absolute inset-0 h-min-screen w-full bg-gradient-to-b from-lime-300">  
   <Navbar />
   <HomePage />
   </div>
  )
}

export default App
