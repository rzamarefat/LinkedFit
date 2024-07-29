import React from "react"
// import { useDispatch, useSelector } from "react-redux"

// import { Increment, Decrement } from "../redux/actions"


const JobItem = () => {
    // const value = useSelector(state => state.initialValue)
    // const dispatch = useDispatch()

    return (
        <>
            <div class="card p-3 my-2" style={{width: "30rem"}}>
                    <h5 class="card-title">Card title</h5>
                    <div class="card-body">    
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a> */}
                    </div>
            </div>
            
        </>
    )
}

export default JobItem