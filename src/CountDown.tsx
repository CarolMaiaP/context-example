import { useContext } from "react"
import { CyclesContext } from "./Home"

export function CountDown(){
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return(
    <div className="countdown">
      <h1>Countdown: {activeCycle}</h1>
      <button type="button" onClick={() => {
        setActiveCycle(4);
      }}>Alterar</button>
    </div>

  )
}