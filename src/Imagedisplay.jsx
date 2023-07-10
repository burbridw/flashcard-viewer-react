import { Imgelement } from "./Imgelement"
import selectObj from "./selectobj.json"
import { useState } from "react"

export function Imagedisplay() {
    const [imageIndex, setImageIndex] = useState(0)
    const [listIndex, setListIndex] = useState(0)
    const [imageList, setImageList] = useState(selectObj[Object.keys(selectObj)[listIndex]])

    // const listLength = imageList.length
    // const listTitles = Object.keys(selectObj)
    // const titlesLength = listTitles.length
    

    // if (imageIndex < 0 ) {
    //     setImageIndex(0)
    // }
    // if ( imageIndex === listLength) {
    //     setImageIndex(listLength - 1)
    // } 

    return (
        <>
            <div className="image-display-container">
                <div className="image-display-button" id="image-back" onClick={() => setImageIndex(currentIndex => currentIndex - 1)}>
                    BACK
                </div>
                <div className="image-display-main">
                    {/* <img src={imageList[imageIndex]} id="display"/> */}
                    <Imgelement list={imageList} index={imageIndex} />
                </div>
                <div className="image-display-button" id="image-next" onClick={() => setImageIndex(currentIndex => currentIndex + 1)}>
                    NEXT
                </div>
            </div>
            <div className="change-button-box">
                <div className="change-button">
                    CHANGE
                </div>
            </div>
        </>
    )
}