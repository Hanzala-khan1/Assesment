import React from 'react'

const Option = ({ options }) => {
    return (
        <div className='Options'>
            {options.map((option) => {
                return (<span className='optionspan'>
                    <input
                        type='checkbox'
                        checked={option.isCorrect}
                    />
                    <span>{option.text}</span>
                </span>)
            })}
        </div>
    )
}

export default Option
