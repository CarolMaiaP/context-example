import { createContext, useState } from 'react'
import './Home.css'
import { CountDown } from './CountDown'
import { NewCycleForm } from './NewCycleForm'

export const CyclesContext = createContext({} as any)

export function Home() {
  let [activeCycle, setActiveCycle] = useState(0);

  return (
    <div className="App">
      <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
        <NewCycleForm/>
        <CountDown/>
      </CyclesContext.Provider>
    </div>
  )
}

