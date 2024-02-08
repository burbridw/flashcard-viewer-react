import { ButtonSet } from "./App"
import { useContext } from "react"

export function LTTopics() {
    const acceptButtonPush = useContext(ButtonSet)
    
    return (
        <div className="topic-button-box">
            <div className="topic-grid">
                <div className="topic-button" id="feelings" onClick={() => acceptButtonPush("lt-feelings")}>
                    Feelings
                </div>
                <div className="topic-button" id="weather" onClick={() => acceptButtonPush("lt-weather")}>
                    Weather
                </div>
                <div className="topic-button" id="colors" onClick={() => acceptButtonPush("colors")}>
                    Colours
                </div>
                <div className="topic-button" id="sports" onClick={() => acceptButtonPush("lt-sports")}>
                    Sports
                </div>
                <div className="topic-button" id="fruitandveg" onClick={() => acceptButtonPush("lt-fruitandveg")}>
                    Fruit/Veg
                </div>
                <div className="topic-button" id="foods" onClick={() => acceptButtonPush("lt-foods")}>
                    Foods
                </div>
                <div className="topic-button" id="desserts" onClick={() => acceptButtonPush("desserts")}>
                    Desserts
                </div>
                <div className="topic-button" id="drinks" onClick={() => acceptButtonPush("lt-drinks")}>
                    Drinks
                </div>
                <div className="topic-button" id="animals" onClick={() => acceptButtonPush("lt-animals")}>
                    Animals
                </div>
                <div className="topic-button" id="numbers" onClick={() => acceptButtonPush("numbers")}>
                    Numbers
                </div>
                <div className="topic-button" id="shapes" onClick={() => acceptButtonPush("lt-shapes")}>
                    Shapes
                </div>
                <div className="topic-button" id="days" onClick={() => acceptButtonPush("lt-days")}>
                    Days
                </div>
                <div className="topic-button" id="letstrytimes" onClick={() => acceptButtonPush("lt-times")}>
                    Times
                </div>
                <div className="topic-button" id="stationery" onClick={() => acceptButtonPush("lt-stationery")}>
                    Stationery
                </div>
                <div className="topic-button" id="descriptions" onClick={() => acceptButtonPush("lt-descriptions")}>
                    Descriptions
                </div>
                <div className="topic-button" id="countries" onClick={() => acceptButtonPush("countries")}>
                    Countries
                </div>
                <div className="topic-button" id="ABC" onClick={() => acceptButtonPush("ABC")}>
                    ABC
                </div>
                <div className="topic-button" id="abc" onClick={() => acceptButtonPush("abc")}>
                    abc
                </div>
                <div className="topic-button" id="actions" onClick={() => acceptButtonPush("lt-actions")}>
                    Actions
                </div>
                <div className="topic-button" id="activities" onClick={() => acceptButtonPush("lt-activities")}>
                    Activities
                </div>
                <div className="topic-button" id="seasons" onClick={() => acceptButtonPush("seasons")}>
                    Seasons
                </div>
                <div className="topic-button" id="school" onClick={() => acceptButtonPush("lt-school")}>
                    School
                </div>
                <div className="topic-button" id="autumnforest" onClick={() => acceptButtonPush("autumnforest")}>
                    Autumn Forest
                </div>
                <div className="topic-button" id="goodmorning" onClick={() => acceptButtonPush("goodmorning")}>
                    Good Morning
                </div>
                <div className="topic-button" id="body" onClick={() => acceptButtonPush("lt-body")}>
                    Body
                </div>
                <div className="topic-button" id="directions" onClick={() => acceptButtonPush("directions")}>
                    Directions
                </div>
                <div className="topic-button" id="buildings" onClick={() => acceptButtonPush("lt-buildings")}>
                    Buildings
                </div>
                <div className="topic-button" id="clothes" onClick={() => acceptButtonPush("lt-clothes")}>
                    Clothes
                </div>
                <div className="topic-button" id="commonitems" onClick={() => acceptButtonPush("lt-commonitems")}>
                    Common Items
                </div>
                <div className="topic-button" id="dailyactivities" onClick={() => acceptButtonPush("lt-dailyactivities")}>
                    Daily Activities
                </div>
                <div className="topic-button" id="events" onClick={() => acceptButtonPush("yearlyevents")}>
                    Events
                </div>
                <div className="topic-button" id="instruments" onClick={() => acceptButtonPush("lt-instruments")}>
                    Instruments
                </div>
                <div className="topic-button" id="jobs" onClick={() => acceptButtonPush("lt-jobs")}>
                    Jobs
                </div>
                <div className="topic-button" id="locations" onClick={() => acceptButtonPush("locations")}>
                    Locations
                </div>
                <div className="topic-button" id="meals" onClick={() => acceptButtonPush("meals")}>
                    Meals
                </div>
                <div className="topic-button" id="months" onClick={() => acceptButtonPush("lt-months")}>
                    Months
                </div>
                <div className="topic-button" id="people" onClick={() => acceptButtonPush("people")}>
                    People
                </div>
                <div className="topic-button" id="schoolevents" onClick={() => acceptButtonPush("schoolevents")}>
                    School Events
                </div>
                <div className="topic-button" id="subjects" onClick={() => acceptButtonPush("subjects")}>
                    Subjects
                </div>
                <div className="topic-button" id="tastes" onClick={() => acceptButtonPush("tastes")}>
                    Tastes
                </div>
                <div className="topic-button" id="time" onClick={() => acceptButtonPush("lt-time")}>
                    Time
                </div>
                <div className="topic-button" id="timesofday" onClick={() => acceptButtonPush("timesofday")}>
                    Times of Day
                </div>
                <div className="topic-button" id="vehicles" onClick={() => acceptButtonPush("vehicles")}>
                    Vehicles
                </div>
                <div className="topic-button" id="christmas" onClick={() => acceptButtonPush("christmas")}>
                    Christmas
                </div>
            </div>
        </div>
    )
}