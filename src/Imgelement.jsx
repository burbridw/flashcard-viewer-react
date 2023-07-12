import { useEffect, useState } from "react"

export function Imgelement({list, index}) {
    const [image, setImage] = useState(list[index])

    useEffect(() =>{
        setImage(list[index])
    }, [index])
    useEffect(() =>{
        setImage(list[index])
    }, [list])

    return (
        <img id="display" src={image} />
    )
}