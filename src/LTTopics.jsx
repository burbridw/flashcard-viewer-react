export function LTTopics({sendBtnInfo}) {

    return (
        <div className="topic-button-box">
            <div className="topic-grid">
                <div className="topic-button" id="countries" onClick={() => sendBtnInfo("countries")}>
                    Countries
                </div>
                <div className="topic-button" id="feelings" onClick={() => sendBtnInfo("feelings")}>
                    Feelings
                </div>
                <div className="topic-button" id="numbers" onClick={() => sendBtnInfo("numbers")}>
                    Numbers
                </div>
                <div className="topic-button" id="colors" onClick={() => sendBtnInfo("colors")}>
                    Colours
                </div>
                <div className="topic-button" id="sports" onClick={() => sendBtnInfo("sports")}>
                    Sports
                </div>
                <div className="topic-button" id="fruitandveg" onClick={() => sendBtnInfo("fruitandveg")}>
                    Fruit/Veg
                </div>
                <div className="topic-button" id="desserts" onClick={() => sendBtnInfo("desserts")}>
                    Desserts
                </div>
                <div className="topic-button" id="drinks" onClick={() => sendBtnInfo("drinks")}>
                    Drinks
                </div>
                <div className="topic-button" id="foods" onClick={() => sendBtnInfo("foods")}>
                    Foods
                </div>
                <div className="topic-button" id="ABC" onClick={() => sendBtnInfo("ABC")}>
                    ABC
                </div>
                <div className="topic-button" id="shapes" onClick={() => sendBtnInfo("shapes")}>
                    Shapes
                </div>
                <div className="topic-button" id="animals" onClick={() => sendBtnInfo("animals")}>
                    Animals
                </div>
                <div className="topic-button" id="seasons" onClick={() => sendBtnInfo("seasons")}>
                    Seasons
                </div>
                <div className="topic-button" id="autumnforest" onClick={() => sendBtnInfo("autumnforest")}>
                    Autumn Forest
                </div>
                <div className="topic-button" id="weather" onClick={() => sendBtnInfo("weather")}>
                    Weather
                </div>
                <div className="topic-button" id="days" onClick={() => sendBtnInfo("days")}>
                    Days
                </div>
                <div className="topic-button" id="letstrytimes" onClick={() => sendBtnInfo("letstrytimes")}>
                    Times
                </div>
                <div className="topic-button" id="stationery" onClick={() => sendBtnInfo("stationery")}>
                    Stationery
                </div>
                <div className="topic-button" id="abc" onClick={() => sendBtnInfo("abc")}>
                    abc
                </div>
                <div className="topic-button" id="school" onClick={() => sendBtnInfo("school")}>
                    School
                </div>
                <div className="topic-button" id="directions" onClick={() => sendBtnInfo("directions")}>
                    Directions
                </div>
                <div className="topic-button" id="goodmorning" onClick={() => sendBtnInfo("goodmorning")}>
                    Good Morning
                </div>
                <div className="topic-button" id="christmas" onClick={() => sendBtnInfo("christmas")}>
                    Christmas
                </div>
            </div>
        </div>
    )
}