import React from 'react';
import { useSelector } from 'react-redux';
import Option from './Ui/Option';
import Questions from './Ui/Questions';
import "./css/component.css"
import axios from 'axios';
import { API_HOST } from '../utils/data';

function Previewcomponent() {
    const questions = useSelector(state => state.worksheet.questions);
    const Saveworksheet = async () => {
        try {
            console.log("dataaaaaaaaaaa", questions)
            const res = await axios({
                method: 'post',
                url: `${API_HOST}worksheet/addworksheet`,
                data: {
                    worksheet: questions
                },
                headers: {}
            })
            console.log("res", res.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className="preview-container">
                <h2>Preview Component</h2>
                {/* <div className='overflowdiv'> */}
                {questions.map((question, index) => (
                    <div key={index} className="question-preview">
                        <Questions Question={question.Question} Qno={index} />
                        <Option options={question.options} />
                    </div>
                ))}
                {/* </div> */}
                <div className='buttondiv'>
                    <button onClick={Saveworksheet}>Save Worksheet</button>
                </div>
            </div>
        </>
    )
}

export default Previewcomponent
