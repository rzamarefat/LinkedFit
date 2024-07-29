import React from 'react'


const JobSearch = () => {
    return (
        <>
            <div class="container-fluid full-height hero-bg">
                <div className='row d-flex justify-content-center align-items-center full-height'>
                    <div className='col-sm-8 d-flex flex-column align-items-center full-height'>

                        <div className='mb-2 d-flex flex-column mt-5 justify-content-center align-items-center'>
                            <h1 className='text-light display-1'>LinkedFit</h1>
                            <h4 className='display-6 linkedin-color-txt'>Make recruiters recognize you by efficient job search based on LLMs</h4>
                        </div>
                        <div className='my-5 w-50'>
                            <form>
                                <div class="form-group my-3">
                                    <input type="text" class="form-control" id="job-title" placeholder="Job Title: Machine Learning"/>
                                </div>
                                <div class="form-group my-3">
                                    <input type="text" class="form-control" id="job-country" placeholder="Country: the Netherlands"/>
                                </div>
                                <button type="submit" class="btn linkedin-color-bg text-light my-3 w-100">Search Positions</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default JobSearch