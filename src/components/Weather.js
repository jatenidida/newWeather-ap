import React from "react"

const Weather =  props => (

        <div>
           {props.city && props.country && <p className = "weather__key">Location:  {props.city}, {props.country}</p>}
           {props.temprature &&<p className = "weather__key"> Temprature: {props.temprature}</p>}
           {props.humidity &&<p className = "weather__key"> Humdity: {props.humidity}</p>}
           {props.description &&<p className = "weather__key"> Description: {props.description}</p>}
           {props.error &&<p className = "weather__error">{props.error}</p>}


        </div>
 
);

export default Weather;