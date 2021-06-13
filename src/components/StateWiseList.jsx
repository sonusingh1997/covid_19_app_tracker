import React from 'react'

const StateWiseList = (props) => {
    return (
        <>
        
            <div className="card-container">
                
                <h1 className="card_head_text">{props.state.state} ( India )</h1>
            <hr />
            
                <h2 className="back1">Confirmed :{props.state.confirmed} </h2>
                <h2 className="back3">Recovered :{props.state.recovered} </h2>
                <h2 className="back4">Death :{props.state.deaths} </h2>
                <h2 className="back2">Active :{props.state.active} </h2>
                <h2 className="back5">Update:{props.state.lastupdatedtime} </h2>
        </div>
    </>
    )
}

export default StateWiseList
