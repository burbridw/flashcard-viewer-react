import { ButtonSet } from "./App"
import { useContext } from "react"

export function NHTopics() {

    const acceptButtonPush = useContext(ButtonSet)

    return (
        <div className="topic-button-box">
        <div className="topic-grid">
            <div className="topic-button" id="feelings" onClick={() => acceptButtonPush("feelings")}>
                Feelings
            </div>
            <div className="topic-button" id="numbers" onClick={() => acceptButtonPush("numbers")}>
                Numbers
            </div>
            <div className="topic-button" id="weather" onClick={() => acceptButtonPush("weather")}>
                Weather
            </div>
            <div className="topic-button" id="colors" onClick={() => acceptButtonPush("colors")}>
                Colours
            </div>
            <div className="topic-button" id="shapes" onClick={() => acceptButtonPush("shapes")}>
                Shapes
            </div>
            <div className="topic-button" id="sports" onClick={() => acceptButtonPush("sports")}>
                Sports
            </div>
            <div className="topic-button" id="sports+" onClick={() => acceptButtonPush("sports+")}>
                Sports+
            </div>
            <div className="topic-button" id="foods" onClick={() => acceptButtonPush("foods")}>
                Foods
            </div>
            <div className="topic-button" id="desserts" onClick={() => acceptButtonPush("desserts")}>
                Desserts
            </div>
            <div className="topic-button" id="drinks" onClick={() => acceptButtonPush("drinks")}>
                Drinks
            </div>
            <div className="topic-button" id="fruitandveg" onClick={() => acceptButtonPush("fruitandveg")}>
                Fruit/Veg
            </div>
            <div className="topic-button" id="ingredients" onClick={() => acceptButtonPush("ingredients")}>
                Ingredients
            </div>
            <div className="topic-button" id="meals" onClick={() => acceptButtonPush("meals")}>
                Meals
            </div>
            <div className="topic-button" id="tastes" onClick={() => acceptButtonPush("tastes")}>
                Tastes
            </div>
            <div className="topic-button" id="animals" onClick={() => acceptButtonPush("animals")}>
                Animals
            </div>
            <div className="topic-button" id="animals+" onClick={() => acceptButtonPush("animals+")}>
                Animals+
            </div>
            <div className="topic-button" id="seaanimals" onClick={() => acceptButtonPush("seaanimals")}>
                Sea Animals
            </div>
            <div className="topic-button" id="seaanimals+" onClick={() => acceptButtonPush("seaanimals+")}>
                Sea Animals+
            </div>
            <div className="topic-button" id="bugs" onClick={() => acceptButtonPush("bugs")}>
                Bugs
            </div>
            <div className="topic-button" id="nature" onClick={() => acceptButtonPush("nature")}>
                Nature
            </div>
            <div className="topic-button" id="nature+" onClick={() => acceptButtonPush("nature+")}>
                Nature+
            </div>
            <div className="topic-button" id="environment" onClick={() => acceptButtonPush("environment")}>
                Environment
            </div>
            <div className="topic-button" id="months" onClick={() => acceptButtonPush("months")}>
                Months
            </div>
            <div className="topic-button" id="seasons" onClick={() => acceptButtonPush("seasons")}>
                Seasons
            </div>
            <div className="topic-button" id="timesofday" onClick={() => acceptButtonPush("timesofday")}>
                Times of Day
            </div>
            <div className="topic-button" id="days" onClick={() => acceptButtonPush("days")}>
                Days
            </div>
            <div className="topic-button" id="countries" onClick={() => acceptButtonPush("countries")}>
                Countries
            </div>
            <div className="topic-button" id="family" onClick={() => acceptButtonPush("family")}>
                Family
            </div>
            <div className="topic-button" id="people" onClick={() => acceptButtonPush("people")}>
                People
            </div>
            <div className="topic-button" id="personalities" onClick={() => acceptButtonPush("personalities")}>
                Personalities
            </div>
            <div className="topic-button" id="personalities+" onClick={() => acceptButtonPush("personalities+")}>
                Personalities+
            </div>
            <div className="topic-button" id="actions1" onClick={() => acceptButtonPush("actions1")}>
                Actions1
            </div>
            <div className="topic-button" id="pastactions" onClick={() => acceptButtonPush("pastactions")}>
                Past Actions
            </div>
            <div className="topic-button" id="actions2" onClick={() => acceptButtonPush("actions2")}>
                Actions2
            </div>
            <div className="topic-button" id="actions3" onClick={() => acceptButtonPush("actions3")}>
                Actions3
            </div>
            <div className="topic-button" id="dailyactivities" onClick={() => acceptButtonPush("dailyactivities")}>
                Daily Activity
            </div>
            <div className="topic-button" id="frequency" onClick={() => acceptButtonPush("frequency")}>
                Frequency
            </div>
            <div className="topic-button" id="body" onClick={() => acceptButtonPush("body")}>
                Body
            </div>
            <div className="topic-button" id="clothes" onClick={() => acceptButtonPush("clothes")}>
                Clothes
            </div>
            <div className="topic-button" id="clothes+" onClick={() => acceptButtonPush("clothes+")}>
                Clothes+
            </div>
            <div className="topic-button" id="buildings" onClick={() => acceptButtonPush("buildings")}>
                Buildings
            </div>
            <div className="topic-button" id="buildings+" onClick={() => acceptButtonPush("buildings+")}>
                Buildings+
            </div>
            <div className="topic-button" id="directions" onClick={() => acceptButtonPush("directions")}>
                Directions
            </div>
            <div className="topic-button" id="locations" onClick={() => acceptButtonPush("locations")}>
                Locations
            </div>
            <div className="topic-button" id="vehicles" onClick={() => acceptButtonPush("vehicles")}>
                Vehicles
            </div>
            <div className="topic-button" id="school" onClick={() => acceptButtonPush("school")}>
                School
            </div>
            <div className="topic-button" id="subjects" onClick={() => acceptButtonPush("subjects")}>
                Subjects
            </div>
            <div className="topic-button" id="instruments" onClick={() => acceptButtonPush("instruments")}>
                Instruments
            </div>
            <div className="topic-button" id="stationery" onClick={() => acceptButtonPush("stationery")}>
                Stationery
            </div>
            <div className="topic-button" id="commonitems" onClick={() => acceptButtonPush("commonitems")}>
                Common Items
            </div>
            <div className="topic-button" id="commonitems+" onClick={() => acceptButtonPush("commonitems+")}>
                Common Items+
            </div>
            <div className="topic-button" id="activities" onClick={() => acceptButtonPush("activities")}>
                Activities
            </div>
            <div className="topic-button" id="activities+" onClick={() => acceptButtonPush("activities+")}>
                Activities+
            </div>
            <div className="topic-button" id="schoolevents" onClick={() => acceptButtonPush("schoolevents")}>
                School Events
            </div>
            <div className="topic-button" id="schoolevents+" onClick={() => acceptButtonPush("schoolevents+")}>
                School Events+
            </div>
            <div className="topic-button" id="yearlyevents" onClick={() => acceptButtonPush("yearlyevents")}>
                Yearly Events
            </div>
            <div className="topic-button" id="yearlyevents+" onClick={() => acceptButtonPush("yearlyevents+")}>
                Yearly Events+
            </div>
            <div className="topic-button" id="conditions" onClick={() => acceptButtonPush("conditions")}>
                Conditions
            </div>
            <div className="topic-button" id="conditions+" onClick={() => acceptButtonPush("conditions+")}>
                Conditions+
            </div>
            <div className="topic-button" id="descriptions" onClick={() => acceptButtonPush("descriptions")}>
                Descriptions
            </div>
            <div className="topic-button" id="jobs" onClick={() => acceptButtonPush("jobs")}>
                Jobs
            </div>
            <div className="topic-button" id="jobs+" onClick={() => acceptButtonPush("jobs+")}>
                Jobs+
            </div>
            <div className="topic-button" id="clubactivities" onClick={() => acceptButtonPush("clubactivities")}>
                Club Activities
            </div>
            <div className="topic-button" id="clubactivities+" onClick={() => acceptButtonPush("clubactivities+")}>
                Club Activities+
            </div>
            <div className="topic-button" id="christmas" onClick={() => acceptButtonPush("christmas")}>
                Christmas
            </div>
            <div className="topic-button" id="ABC" onClick={() => acceptButtonPush("ABC")}>
                ABC
            </div>
            <div className="topic-button" id="abc" onClick={() => acceptButtonPush("abc")}>
                abc
            </div>
            </div>
        </div>
    )
}