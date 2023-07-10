import { useState } from "react"

export function Imgelement({list, index}) {
    const [image, setImage] = useState(list[index])
    return (
        <img id="display" src={image} />
    )
}