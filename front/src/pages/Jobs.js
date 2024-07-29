import React from 'react'
import JobItem from '../components/JobItem'

const Jobs = () => {
    return (
        <>
            
            <div class="container full-height p-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className='display-5 my-5'>Retrieved Jobs</h1>
                <div className='row d-flex justify-content-center align-items-center full-height'>
                    <div className='col-sm-8 d-flex flex-column align-items-center full-height'>
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