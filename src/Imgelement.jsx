import { useEffect, useState } from "react"
import allObj from "./allobj.json"

export function Imgelement({list, index, soundState, topic}) {
    const [image, setImage] = useState(list[index])
    const [activeSound, setActivesound] = useState("./sounds/feelings/img1.mp3")

    useEffect(() =>{
        setImage(list[index])
    }, [index])
    useEffect(() =>{
        setImage(list[index])
    }, [list])
    useEffect( ()=>{
        setActivesound(locateSound())
    },[image])
    useEffect( ()=>{
        playAudio()
    },[activeSound])

    function locateSound() {
        for ( const key in allObj[topic]) {
            if ( allObj[topic][key]["image"] === image ) {
                return allObj[topic][key]["sound"]
            }
        }
    }

    function playAudio() {
        if ( soundState && activeSound ) {
            try{
                pronouncer.play()
            } catch (err) {
                console.log("Audio could not play")
            }
        }
    }

    return (
        <>
        <img id="display" src={image} onClick={playAudio} />
        <audio src={activeSound} id="pronouncer"></audio>
        </>
    )
}