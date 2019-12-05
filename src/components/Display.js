import React from 'react';

const Display = ({strikes, balls}) => {

    return (
        <div className='scoreboard'>
            <div className="bottomRow">
                <div className="toGo">
                    <h3 className="toGo__title">Strikes</h3>
                    <div className="toGo__value">{strikes}</div>
                </div>
                <div className="ballOn">
                    <h3 className="ballOn__title">Balls</h3>
                    <div className="ballOn__value">{balls}</div>
                </div>
            </div>
        </div>
    )
}

export default Display;