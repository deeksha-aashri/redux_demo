import React, { useState } from 'react'
import { connect } from 'react-redux'

function Bat(props) {
  //The 6 slines that follow sgow us how code works without redux that is when we yse usestate to set states
  //   const [bat,setBat]=useState(20);
  // return (
  //   <div>
  //       <h1>Bats: {bat}</h1>
  //       <button onClick={()=>setBat(bat-1)}>Buy Bat</button>
  //       </div>
  //)
  //using redux
  return (
    <div>
      <h1>Bats:{props.batss}</h1>
      <button onClick={props.buyBat}> Buy Bat</button>
    </div>
  )
}
//mapStateToProps is a getter. It gets states from the global store using the connect method. Then it passes the state as a prop to the component.This function returns an object
const mapStateToProps=(state)=>{
return{
  batss:state.bat.bats
}
}
//The mapDispatchToProps function dispatches an action. It is a setter.That it goes to the reducer and runs the corresponding switch case.
//how it runs: connect method runs it and an object is returned whose value is inturn returned by a dispatch function. This then passes it to the comp as a prop
const mapDispatchToProps=(dispatch)=>{
return{
  buyBat:()=>dispatch({type:"BUY_BAT"})//dispatch is a function whose arg is the action object. Here we have not used the second key called payload of action obj nonetheless remember it is the action object
             //dispatch(actionObj)      //type key of action object helps us identify the  switch case.
}
}

export default connect(mapStateToProps, mapDispatchToProps) (Bat)
//connect is a higher order component it takes  functions as arg like ,(mapstatetoprop) which works on a component like,(bat).