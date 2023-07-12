import { useState } from "react"
import { ControlBar } from "./ControlBar"
import { Greencontrols } from "./Greencontrols"
import "./styles.css"
import { Imagedisplay } from "./Imagedisplay"
import { Topicbuttons } from "./Topicbuttons"

function App() {
  const [goOrange, setGoOrange] = useState(true)
  const [orangeState, setOrangeState] = useState(()=> {
    return <ControlBar />
  })
  const [btnPush, setBtnPush] = useState("")

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

  function acceptButtonPush(button) {
    setBtnPush(button)
  }

  return (
    <div className="background">
    <Topicbuttons sendBtnInfo={acceptButtonPush}/>
      {/* {orangeState}
      <div className="change-button-box">
          <div className="change-button" onClick={changeState}>
            CHANGE
          </div>
      </div> */}
      <Imagedisplay button={btnPush}/>
    </div>
  )
}

export default App
