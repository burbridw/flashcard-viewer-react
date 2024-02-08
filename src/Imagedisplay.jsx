import { Imgelement } from "./Imgelement"
import selectObj from "./selectobj.json"
import { useState, useEffect } from "react"

export function Imagedisplay({button, toggleMenu, text, sounds, icon, soundState, currentTopic}) {
    const [listIndex, setListIndex] = useState(0)
    const [imageList, setImageList] = useState(selectObj[Object.keys(selectObj)[listIndex]])
    const [listLength, setListlength] = useState(imageList.length)
    const [imageIndex, setImageIndex] = useState(0)
    const [randomList, setRandomList] = useState([])
    useEffect( ()=>{
        setRandomList(imageList.slice(0, imageList.length).sort( ()=> { return 0.5 - Math.random() } ) )
    }, [imageList])

    const listTitles = Object.keys(selectObj)
    const titlesLength = listTitles.length

    useEffect( ()=>{
        setImageList(selectObj[button])
    }, [button])
    
    useEffect(()=>{
        setImageList(selectObj[Object.keys(selectObj)[listIndex]])
        setImageIndex(0)
    }, [listIndex])
    useEffect(()=>{
        setListlength(imageList.length)
        setImageIndex(0)
    }, [imageList])

    if (imageIndex < 0 ) {
        setImageIndex(0)
    }
    if ( imageIndex === listLength) {
        setImageIndex(listLength - 1)
    } 
    if (listIndex < 0 ) {
        setListIndex(0)
    }
    if ( listIndex === titlesLength) {
        setListIndex(titlesLength - 1)
    }
    
    return (
        <>
            <div className="image-display-container">
                <div className="image-display-button display-left" id="image-back" onClick={() => setImageIndex(currentIndex => currentIndex - 1)}>
                <img src="./images/arrows/img2.png"></img>
                </div>
                <div className="image-display-main">
                    <Imgelement list={imageList} index={imageIndex} soundState={soundState} topic={currentTopic}/>
                </div>
                <div className="image-display-button" id="image-next" onClick={() => setImageIndex(currentIndex => currentIndex + 1)}>
                    <img src="./images/arrows/img2.png"></img>
                </div>
                <div className="toggle-menu" id="toggle" onClick={()=> toggleMenu(currentState => !currentState)}>
                    <span>{text}</span>
                </div>
                <div className="sound-control" id="sounds" onClick={()=> sounds(currentState => !currentState)}>
                    <img className="sound-button" src={icon}></img>
                </div>
            </div>
            <div className="shuffle-button-box">
                <div className="shuffle-button" onClick={()=> setImageList(randomList)}>
                    SHUFFLE
                </div>
            </div>
        </>
    )
}