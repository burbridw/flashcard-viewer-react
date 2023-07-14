import { useEffect, useState } from "react"
import "./styles.css"
import { Imagedisplay } from "./Imagedisplay"
import { TopicsDisplay } from "./TopicsDisplay"

function App() {
  const [btnPush, setBtnPush] = useState("")
  const [showMenu, setShowMenu] = useState(true)

  const closeMenu = showMenu ? <TopicsDisplay relayList={acceptButtonPush} /> : null
  const toggleText = showMenu ? "CLOSE MENU" : "OPEN MENU"
  function acceptButtonPush(button) {
    setBtnPush(button)
  }
       
  return (
    <div className="background">
      {closeMenu}
      <Imagedisplay button={btnPush} toggleMenu={setShowMenu} text={toggleText}/>
    </div>
  )
}

export default App
