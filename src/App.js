import React from "react";

import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"



const API_KEY = "e4fc0603b3aa74788cce8f69d0c06846";


//wrapper component
//This class creates an instance of a react component and the will name it App
//It is also the major component


class App extends React.Component{


//State is an object that lives in an object,
// Interaction with the user that's causing the app to change, when something is clicked or
//changed. It also contains key value pairs

  state = {

    temprature: undefined,
    city:undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined


  }
  //Defining a method that would be passed to forms to submit data
  // data about city and country that we want to get data about

  //we will pass e to the funtion, e is just an event we are going to use to avoid the full page refresh

getWeather = async(e) => {
  e.preventDefault();

  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);

  const data = await api_call.json();


  //If a value is entered only, fetch the data
  if (city && country){
  //upon submitting the form, this data will be grabbed from the api
  this.setState({

    temprature: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    error: ""
  });
}
//if no value is entered, then display an error message
else {
  this.setState({
  temprature: undefined,
  city:undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: "Please enter a value"
});

}

}


//It returns a JSX
render() {
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temprature={this.state.temprature} 
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

};

//Make this file (App) available to other files
export default App;