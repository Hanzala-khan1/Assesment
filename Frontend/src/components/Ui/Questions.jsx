import React from 'react'

const Questions = ({ Question, Qno }) => {
    console.log("questions", Question)
    return (
        <h5 className='list-question'>
            Q {Qno + 1} : {Question}
        </h5>
    )
}

export default Questions
