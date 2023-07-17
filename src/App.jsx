import './App.css'
import Head from './Components/Head'
import NavBar from './Components/NavBar'
import SecondBody from './Components/SecondBody'
import ThirdBody from './Components/ThirdBody'
import FifthBody from './Components/FifthBody'
import FourthBody from './Components/FourthBody'
import SixBody from './Components/SixBody'
import SeventhBody from './Components/SeventhBody'
import EightBody from './Components/EightBody'
import NinethBody from './Components/NinethBody'

function App() {

  return (
    <>
      <div className='bg'>
        <NavBar />
        <Head />
        <SecondBody />
        <ThirdBody />
        <FourthBody />
        <FifthBody />
        <SixBody />
        <SeventhBody />
        <EightBody />
        <NinethBody />
      </div>
    </>
  )
}

export default App
