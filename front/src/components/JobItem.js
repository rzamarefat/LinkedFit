import React from "react"
// import { useDispatch, useSelector } from "react-redux"

// import { Increment, Decrement } from "../redux/actions"


const JobItem = () => {
    // const value = useSelector(state => state.initialValue)
    // const dispatch = useDispatch()

    return (
        <>
            <div class="card p-3 m-2" style={{width: "30rem"}}>
                    <h5 class="card-title">Company Name</h5>
                    <div class="card-body">    
                        <h6 class="card-subtitle mb-2 text-muted">Mechanical Maintenance Engineer  - Chakan Pune (Only Diploma Mechanical )</h6>
                        <p class="card-text">Madha, Maharashtra, India</p>
                        <button class="btn btn-dark text-light my-1 w-100">More on this position</button>
                        <button class="btn btn-dark text-light my-1 w-100">Check with my resume</button>
                        {/* <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a> */}
                    </div>
            </div>
            
        </>
    )
}

export default JobItem