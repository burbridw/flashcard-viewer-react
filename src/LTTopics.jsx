export function LTTopics({sendBtnInfo}) {

    return (
        <div className="topic-button-box">
        <div className="topic-grid">
            <div className="topic-button" id="letstrytimes" onClick={() => sendBtnInfo("letstrytimes")}>
                Times
            </div>
            <div className="topic-button" id="christmas" onClick={() => sendBtnInfo("christmas")}>
                Christmas
            </div>
            <div className="topic-button" id="autumnforest" onClick={() => sendBtnInfo("autumnforest")}>
                Autumn Forest
            </div>
            <div className="topic-button" id="goodmorning" onClick={() => sendBtnInfo("goodmorning")}>
                Good Morning
            </div>
            <div className="topic-button" id="ABC" onClick={() => sendBtnInfo("ABC")}>
                ABC
            </div>
            <div className="topic-button" id="abc" onClick={() => sendBtnInfo("abc")}>
                abc
            </div>
            </div>
        </div>
    )
}