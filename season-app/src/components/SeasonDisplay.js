import React from 'react';

const SeasonConfig = {
    Summer : {
        text : "Let's hit the beach.",
        iconName : 'sun'
    },
    Winter : {
        text : "Bruhh, it's chilly.",
        iconName : 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "Summer" : "Winter";
    }
    else {
        return lat > 0 ? "Winter" : "Summer";
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const seasonData = SeasonConfig[season]

    return (
        <div>
            <i className={`${seasonData.iconName} icon`}></i>
            <h1>{seasonData.text}</h1>
            <i className={`${seasonData.iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay;