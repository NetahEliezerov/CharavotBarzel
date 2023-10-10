import React, { useState } from 'react'

const TimerComponent = ({result, day}) => {
    return (
        <div style={{ width: '17vw' }}>
            <h1 className='dateText'>October {day}, 2023</h1>
            <h1 className='timerText'>{result}</h1>
        </div>
    )
}

export default TimerComponent