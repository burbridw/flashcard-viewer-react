import { Imgelement } from "./Imgelement"
import selectObj from "./selectobj.json"
import { useState, useEffect } from "react"

export function Imagedisplay() {
    const [listIndex, setListIndex] = useState(0)
    const [imageList, setImageList] = useState(selectObj[Object.keys(selectObj)[listIndex]])
    const [listLength, setListlength] = useState(imageList.length)
    const [imageIndex, setImageIndex] = useState(0)

    const listTitles = Object.keys(selectObj)
    // const titlesLength = listTitles.length

    if (imageIndex < 0 ) {
        setImageIndex(0)
    }
    if ( imageIndex === listLength) {
        setImageIndex(listLength - 1)
    } 

    useEffect(()=>{
        setImageList(selectObj[Object.keys(selectObj)[listIndex]])
        setImageIndex(0)
    }, [listIndex])
    useEffect(()=>{
        setListlength(imageList.length)
    }, [imageList])

    return (
        <>
            <div className="image-display-container">
                <div className="image-display-button" id="image-back" onClick={() => setImageIndex(currentIndex => currentIndex - 1)}>
                    BACK
                </div>
                <div className="image-display-main">
                    <img src={imageList[imageIndex]} id="display"/>
                    {/* <Imgelement list={imageList} index={imageIndex} changeImage={setImage}/> */}
                </div>
                <div className="image-display-button" id="image-next" onClick={() => setImageIndex(currentIndex => currentIndex + 1)}>
                    NEXT
                </div>
            </div>
            <div className="change-button-box">
                <div className="change-button" onClick={() => setListIndex(currentIndex => currentIndex + 1)}>
                    CHANGE
                </div>
            </div>
        </>
    )
}