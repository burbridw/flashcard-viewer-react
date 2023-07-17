import { useState, createContext } from "react"
import "./styles.css"
import { Imagedisplay } from "./Imagedisplay"
import { TopicsDisplay } from "./TopicsDisplay"

export const ButtonSet = createContext()

export default function App() {
  const [btnPush, setBtnPush] = useState("")
  const [showMenu, setShowMenu] = useState(true)

  const closeMenu = showMenu ? <TopicsDisplay /> : null
  const toggleText = showMenu ? "CLOSE MENU" : "OPEN MENU"
  function acceptButtonPush(button) {
    setBtnPush(button)
  }
       
  return (
    <ButtonSet.Provider value={acceptButtonPush}>
    <div className="background">
      {closeMenu}
      <Imagedisplay button={btnPush} toggleMenu={setShowMenu} text={toggleText}/>
    </div>
    </ButtonSet.Provider>
  )
}

