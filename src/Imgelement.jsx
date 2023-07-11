import { useState } from "react"

export function Imgelement({list, index, changeImage}) {
    const [image, setImage] = useState(list[index])
    return (
        <img id="display" src={image} />
    )
}