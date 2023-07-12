import { Imgelement } from "./Imgelement"
import selectObj from "./selectobj.json"
import { useState, useEffect } from "react"

export function Imagedisplay({button}) {
    const [listIndex, setListIndex] = useState(0)
    const [imageList, setImageList] = useState(selectObj[Object.keys(selectObj)[listIndex]])
    const [listLength, setListlength] = useState(imageList.length)
    const [imageIndex, setImageIndex] = useState(0)
    const [randomList, setRandomList] = useState([])
    const [prevList, setPrevList] = useState("none")
    const [nextList, setNextList] = useState("numbers")
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
        setPrevList(listTitles[listIndex-1])
        setNextList(listTitles[listIndex+1])
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
                <div className="image-display-button" id="image-back" onClick={() => setImageIndex(currentIndex => currentIndex - 1)}>
                    BACK
                </div>
                <div className="image-display-main">
                    {/* <img src={imageList[imageIndex]} id="display"/> */}
                    <Imgelement list={imageList} index={imageIndex}/>
                </div>
                <div className="image-display-button" id="image-next" onClick={() => setImageIndex(currentIndex => currentIndex + 1)}>
                    NEXT
                </div>
            </div>
            <div className="change-button-box">
                <div className="change-button" onClick={() => setListIndex(currentIndex => currentIndex - 1)}>
                    PREV {prevList}
                </div>
                <div className="change-button" onClick={()=> setImageList(randomList)}>
                    SHUFFLE
                </div>
                <div className="change-button" onClick={() => setListIndex(currentIndex => currentIndex + 1)}>
                    NEXT {nextList}
                </div>
            </div>
        </>
    )
}