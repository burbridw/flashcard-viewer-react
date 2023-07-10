import selectObj from "./selectobj.json"
import { useState } from "react"

export function Imagedisplay() {
    const [imageIndex, setImageIndex] = useState(0)
    const [imageList, setImageList] = useState(selectObj["feelings"])
    const [displayImage, setDisplayImage] = useState("")

    const listLength = imageList.length

    function goNext() {
        if ( imageIndex < listLength - 1 ) {
            setImageIndex( currentIndex => {
                return currentIndex + 1
            })
        }
        showImage(imageList,imageIndex)
    }
    function goBack() {
        if ( imageIndex > 0 ) {
            setImageIndex( currentIndex => {
                return currentIndex - 1
            })
        }
        showImage(imageList,imageIndex)
    }

    function showImage(list, index) {
        console.log(imageIndex)
        setDisplayImage(list[index])
    }
    
    
    return (
        <div className="image-display-container">
            <div className="image-display-button" id="image-back" onClick={goBack}>
                BACK
            </div>
            <div className="image-display-main">
                <img src={displayImage} id="display"/>
            </div>
            <div className="image-display-button" id="image-next" onClick={goNext}>
                NEXT
            </div>
        </div>
    )
}