import React from 'react';

const Dashboard = ({addBall, addStrike, foulBall, hitBall}) => {

    return (
        <div className='buttons'>
                <div className="homeButtons">
                    {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                    <button
                        onClick={addStrike}
                        className="homeButtons__touchdown"
                    >
                        Strikes
                    </button>
                    <button
                        onClick={addBall}
                        className="homeButtons__fieldGoal"
                    >
                        Balls
                    </button>
                    <button
                        onClick={hitBall}
                        className="homeButtons__touchdown"
                    >
                        Hit
                    </button>
                    <button
                        onClick={foulBall}
                        className="homeButtons__fieldGoal"
                    >
                        Foul
                    </button>
                </div>
        </div>
    )
}

export default Dashboard;