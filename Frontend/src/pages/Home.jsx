import React from 'react'
import Preview from '../components/preview'
import Questionform from '../components/Questionform'
import "./css/Main.css"

const Home = () => {
    return (
        <>
            <div className='home-main'>
                <Questionform />
                <Preview />
            </div>
        </>
    )
}

export default Home
