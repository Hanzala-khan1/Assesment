import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_HOST } from '../utils/data'
import { useNavigate } from 'react-router-dom'

const Worksheet = () => {

    const [worksheets, setworksheets] = useState([])

    useEffect(() => {
        getWorksheet()
    }, [])

    const navigate = useNavigate()
    const getWorksheet = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}worksheet/getworksheet`,
                data: {},
                headers: {}
            })
            console.log("ressssssssssss", res.data)
            setworksheets(res?.data?.data)
        } catch (err) {
            console.log(err)
        }
    }
    const Showpage = ({ worksheet }) => {
        navigate("/worksheet/question", { state: { data: worksheet } })
    }
    return (
        <div className='worksheetSection'>
            <h1>Worksheet</h1>
            <div className='worksheet-div'>
                {worksheets.length > 0 ? (
                    worksheets?.map((worksheet, Index) => {
                        return (
                            <div
                                className='Boxdiv'
                                onClick={() => Showpage(worksheet)}
                            >
                                Worksheet NO {Index + 1}
                            </div>
                        )
                    })) : (
                    <div
                        className='Boxdiv'
                    >
                        NO Available content to show
                    </div>
                )
                }
            </div>


        </div>
    )
}

export default Worksheet
