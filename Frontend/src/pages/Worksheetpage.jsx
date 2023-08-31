import React from 'react'
import { useLocation } from 'react-router-dom';
import Questions from '../components/Ui/Questions';
import Option from '../components/Ui/Option';

const Worksheetpage = () => {
    const location = useLocation();
    const receivedData = location.state?.data || 'No data received.';
    console.log("myyyyyyyyyyy", receivedData)
    return (
        <div className="preview-container">
            <h2>Worksheet</h2>
            {receivedData.map((question, index) => (
                <div key={index} className="question-preview">
                    <Questions Question={question.Question} Qno={index} />
                    <Option options={question.options} />
                </div>
            ))}

        </div>
    )
}

export default Worksheetpage
