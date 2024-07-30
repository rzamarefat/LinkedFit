import React from 'react'
import JobItem from '../components/JobItem'

const Jobs = () => {
    return (
        <>
            
            <div class="container full-height p-3 d-flex flex-column justify-content-center align-items-center">
                <h1 className='display-5 my-2'>Retrieved Jobs</h1>
                <div className='row d-flex justify-content-center align-items-centers full-height'>
                    <div className='col-sm-8 d-flex flex-row align-items-center full-height'>
                        <JobItem/>
                        <JobItem/>
                        <JobItem/>
                        <JobItem/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobs