import {Header} from './components/Header.tsx'
import { Preparation } from './components/Preparation.tsx'
import { Ingredients } from './components/Ingredients.tsx'
import { Instructions } from './components/Instructions.tsx'
import { Nutrition } from './components/Nutrition.tsx'

function App() {
  return (
    <div className="flex-col h-screen bg-eggshell flexCenter">
      <div className='bg-white rounded-xl w-[739px] h-fit flexCenter flex-col p-8 space-y-12'>
        <Header/>
        <Preparation/>
        <Ingredients/>
        <Instructions/>
        <Nutrition/>
      </div>
    </div>
  )
}

export default App
