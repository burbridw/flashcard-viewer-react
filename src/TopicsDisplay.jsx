import { NHTopics } from "./NHTopics"
import { LTTopics } from "./LTTopics"
import { useState, useEffect } from "react"

export function TopicsDisplay({relayList}) {
    const [showNH, setShowNH] = useState(true) 
    const [buttonText, setButtonText] = useState("LETS TRY")

    const buttonShow = showNH ? <NHTopics sendBtnInfo={relayButtonPush}/> : <LTTopics sendBtnInfo={relayButtonPush}/>
    const replaceButtonText = showNH ? "LETS TRY" : "NEW HORIZON"

    function relayButtonPush(button) {
      relayList(button)
    }

    useEffect( ()=> {
        setButtonText(replaceButtonText)
       }, [showNH])
    return (
        <>
            {buttonShow}
            <div className="change-button-box">
                <div className="change-button" onClick={()=> setShowNH( currentState => !currentState)}>
                {buttonText}
                </div>
            </div>
        </>
    )
}