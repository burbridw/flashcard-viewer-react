import { useEffect, useState } from "react"
import "./styles.css"
import { Imagedisplay } from "./Imagedisplay"
import { NHTopics } from "./NHTopics"
import { LTTopics } from "./LTTopics"

function App() {
  const [btnPush, setBtnPush] = useState("")
  const [showNH, setShowNH] = useState(true) 
  const [buttonText, setButtonText] = useState("CHANGE TO LETS TRY")

  const buttonShow = showNH ? <NHTopics sendBtnInfo={acceptButtonPush}/> : <LTTopics sendBtnInfo={acceptButtonPush}/>
  const replaceButtonText = showNH ? "CHANGE TO LETS TRY" : "CHANGE TO NEW HORIZON"

  function acceptButtonPush(button) {
    setBtnPush(button)
  }

  useEffect( ()=> {
   setButtonText(replaceButtonText)
  }, [showNH])

  return (
    <div className="background">
    {buttonShow}
      <div className="change-button-box">
          <div className="change-button" onClick={()=> setShowNH( currentState => !currentState)}>
            {buttonText}
          </div>
      </div>
      <Imagedisplay button={btnPush}/>
    </div>
  )
}

export default App
