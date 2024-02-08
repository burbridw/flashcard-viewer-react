import { useState, createContext, useEffect } from "react"
import "./styles.css"
import { Imagedisplay } from "./Imagedisplay"
import { TopicsDisplay } from "./TopicsDisplay"

export const ButtonSet = createContext()

export default function App() {
  const [btnPush, setBtnPush] = useState("feelings")
  const [showMenu, setShowMenu] = useState(true)
  const [soundState, setSoundState] = useState(true)
  const [soundIcon, setSoundIcon] = useState("./assets/soundon.png")

  const closeMenu = showMenu ? <TopicsDisplay /> : null
  const toggleText = showMenu ? "CLOSE MENU" : "OPEN MENU"

  function acceptButtonPush(button) {
    setBtnPush(button)
  }
  
  useEffect(()=>{
    soundState ? setSoundIcon("./assets/soundon.png") : setSoundIcon("./assets/soundoff.png")
  },[soundState])

  return (
    <ButtonSet.Provider value={acceptButtonPush}>
    <div className="background">
      {closeMenu}
      <Imagedisplay button={btnPush} toggleMenu={setShowMenu} text={toggleText} sounds={setSoundState} icon={soundIcon} soundState={soundState} currentTopic={btnPush}/>
    </div>
    </ButtonSet.Provider>
  )
}

