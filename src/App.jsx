import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Page2 from './components/Page2'
import Navbar2 from './components/Navbar2'

function App() {
  

  return (
   <div className="absolute inset-0 h-min-screen w-full bg-black">  
   <Navbar />
   <HomePage />
   <Page2 />
   <Navbar2 />
   </div>
  )
}

export default App
