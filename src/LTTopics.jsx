import { ButtonSet } from "./App"
import { useContext } from "react"

export function LTTopics() {
    const acceptButtonPush = useContext(ButtonSet)

    return (
        <div className="topic-button-box">
            <div className="topic-grid">
                <div className="topic-button" id="countries" onClick={() => acceptButtonPush("countries")}>
                    Countries
                </div>
                <div className="topic-button" id="feelings" onClick={() => acceptButtonPush("feelings")}>
                    Feelings
                </div>
                <div className="topic-button" id="numbers" onClick={() => acceptButtonPush("numbers")}>
                    Numbers
                </div>
                <div className="topic-button" id="colors" onClick={() => acceptButtonPush("colors")}>
                    Colours
                </div>
                <div className="topic-button" id="sports" onClick={() => acceptButtonPush("sports")}>
                    Sports
                </div>
                <div className="topic-button" id="fruitandveg" onClick={() => acceptButtonPush("fruitandveg")}>
                    Fruit/Veg
                </div>
                <div className="topic-button" id="desserts" onClick={() => acceptButtonPush("desserts")}>
                    Desserts
                </div>
                <div className="topic-button" id="drinks" onClick={() => acceptButtonPush("drinks")}>
                    Drinks
                </div>
                <div className="topic-button" id="foods" onClick={() => acceptButtonPush("foods")}>
                    Foods
                </div>
                <div className="topic-button" id="ABC" onClick={() => acceptButtonPush("ABC")}>
                    ABC
                </div>
                <div className="topic-button" id="shapes" onClick={() => acceptButtonPush("shapes")}>
                    Shapes
                </div>
                <div className="topic-button" id="animals" onClick={() => acceptButtonPush("animals")}>
                    Animals
                </div>
                <div className="topic-button" id="seasons" onClick={() => acceptButtonPush("seasons")}>
                    Seasons
                </div>
                <div className="topic-button" id="autumnforest" onClick={() => acceptButtonPush("autumnforest")}>
                    Autumn Forest
                </div>
                <div className="topic-button" id="weather" onClick={() => acceptButtonPush("weather")}>
                    Weather
                </div>
                <div className="topic-button" id="days" onClick={() => acceptButtonPush("days")}>
                    Days
                </div>
                <div className="topic-button" id="letstrytimes" onClick={() => acceptButtonPush("lt-times")}>
                    Times
                </div>
                <div className="topic-button" id="stationery" onClick={() => acceptButtonPush("stationery")}>
                    Stationery
                </div>
                <div className="topic-button" id="abc" onClick={() => acceptButtonPush("abc")}>
                    abc
                </div>
                <div className="topic-button" id="school" onClick={() => acceptButtonPush("school")}>
                    School
                </div>
                <div className="topic-button" id="directions" onClick={() => acceptButtonPush("directions")}>
                    Directions
                </div>
                <div className="topic-button" id="goodmorning" onClick={() => acceptButtonPush("goodmorning")}>
                    Good Morning
                </div>
                <div className="topic-button" id="christmas" onClick={() => acceptButtonPush("christmas")}>
                    Christmas
                </div>
            </div>
        </div>
    )
}