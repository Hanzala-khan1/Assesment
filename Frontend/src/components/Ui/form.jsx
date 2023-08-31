import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../../redux/worksheetSlice';

function WorksheetForm() {
    const dispatch = useDispatch();
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState([{ text: '', isCorrect: false }]);

    const handleAddOption = () => {
        setOptions([...options, { text: '', isCorrect: false }]);
    };

    const handleOptionChange = (optionIndex, text) => {
        const updatedOptions = [...options];
        updatedOptions[optionIndex].text = text;
        setOptions(updatedOptions);
    };

    const handleCorrectCheckboxChange = (optionIndex) => {
        const updatedOptions = [...options];
        updatedOptions[optionIndex].isCorrect = !updatedOptions[optionIndex].isCorrect;
        setOptions(updatedOptions);
    };

    const handleAddQuestion = () => {
        const question = {
            Question: questionText,
            options: options,
        };
        console.log(".............", question)
        dispatch(addQuestion(question));

        setQuestionText('');
        setOptions([{ text: '', isCorrect: false }]);
    };

    return (
        <div className="worksheet-form">
            <h2>Worksheet Form</h2>
            <div className="question">
                <input
                    type="text"
                    placeholder="Enter question"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                />
                <ul className="options-list">
                    {options.map((option, optionIndex) => (
                        <li key={optionIndex}>
                            <input
                                type="text"
                                placeholder={`Enter option ${optionIndex + 1}`}
                                value={option.text}
                                onChange={(e) => handleOptionChange(optionIndex, e.target.value)}
                            />
                            <label className='label'>
                                <input
                                    type="checkbox"
                                    checked={option.isCorrect}
                                    onChange={() => handleCorrectCheckboxChange(optionIndex)}
                                />
                                correct
                            </label>
                        </li>
                    ))}
                </ul>
                <button onClick={handleAddOption}>Add Option</button>
            </div>
            <button onClick={handleAddQuestion}>Add Question</button>
        </div>
    );
}

export default WorksheetForm;
