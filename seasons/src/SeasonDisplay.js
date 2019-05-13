import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it's chilly!",
        icon: 'snowflake'
    }
}

class SeasonDisplay extends React.Component {
    state = {season : this.getSeason(this.props.lat, new Date().getMonth())};

    getSeason(lat, month) {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter';
        } else {
            return lat > 0 ? 'winter' : 'summer';
        }
    }

    render() {
        return (
            <div className={`season-display ${this.state.season}`}>
                <i className={`icon-left massive ${seasonConfig[this.state.season].icon} icon`} />
                <h1>{seasonConfig[this.state.season].text}</h1>
                <i className={`icon-right massive ${seasonConfig[this.state.season].icon} icon`} />
            </div>
        );
    }
}

export default SeasonDisplay;