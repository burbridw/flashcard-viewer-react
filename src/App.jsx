import { useState } from "react"
import { ControlBar } from "./ControlBar"
import { Greencontrols } from "./Greencontrols"
import "./styles.css"

function App() {
  const [goOrange, setGoOrange] = useState(true)
  const [orangeState, setOrangeState] = useState(()=> {
    return <ControlBar />
  })

  function changeState() {
    if (goOrange) {
      setGoOrange(false)
      setOrangeState(()=>{
        return <Greencontrols />
      })
    } else {
      setGoOrange(true)
      setOrangeState(()=>{
        return <ControlBar />
      })
    }
  } 
  return (
    <div className="background">
      {orangeState}
      <div className="change-button-box">
          <div className="change-button" onClick={changeState}>
            CHANGE
          </div>
      </div>
    </div>
  )
}

export default App
