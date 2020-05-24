import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faThermometerHalf,faMapMarkerAlt,faTint,faChartBar } from '@fortawesome/free-solid-svg-icons'


import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {fetchAPIResponse} from "../actions/fetch_api_data";

class Main extends Component {
  constructor(){
    super();
    this.state = {
      value: ""
    }
  }
 
  componentWillMount= () =>{
     this.props.FetchAPIResponse("California");
  }

  
  search = () =>{
    this.props.FetchAPIResponse(this.state.value);
  }

  changeHandler = (e) =>{
   
    let value= e.target.value;
   
    this.setState({
      value : value
    });
    
  }

  render() {
    return (
      <div>
           <div className="form">

            <input name="city" placeholder="California" onChange ={this.changeHandler} />
            <button onClick={this.search}><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        <div className="dashboard">
       

          <h2><FontAwesomeIcon icon={faChartBar} /> Dashboard </h2>
            <h2><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</h2> 
            <div className="data-container">
            <div className="square">
                <p>City</p>
                <p className="data">{this.props.apiLocation[0]}</p>
              </div>
              <div className="square">
              <p>Country</p>
              <p className="data">{this.props.apiLocation[1]}</p>
              </div>
              <div className="square">
              <p>Time Zone Id</p>
              <p className="data">{this.props.apiLocation[5]}</p>
              </div>
              <div className="square">
              <p>Local Time</p>
              <p className="data">{this.props.apiLocation[6]}</p>
              </div>
            </div>

            <h2><FontAwesomeIcon icon={faTint} /> Current Conditions</h2>   
            <div className="data-container">
            
              <div className="square">
                <p>Weather Description</p>
                <p className="data">{this.props.apiResponse[4]}</p>
              </div>
              <div className="square">
                <img src={this.props.apiResponse[3]} alt="current weather condition icon" />
              </div>

            </div> 
            

            <h2><FontAwesomeIcon icon={faThermometerHalf} /> Other Conditions </h2>   
            <div className="data-container">
            
            <div className="square">
                <p>CloudCover</p>
                <p className="data">{this.props.apiResponse[11]} %</p>
            
              </div>
              <div className="square">
              <p>Temperature (Celcius)</p>
              <p className="data">{this.props.apiResponse[1]} °C</p>
              </div>
              <div className="square">
              <p>Observation time</p>
              <p className="data">{this.props.apiResponse[0]} </p>
              </div>
              <div className="square">
              <p>Humidity</p>
              <p className="data">{this.props.apiResponse[9]} %</p>
              </div>

            </div> 
          
        </div>
      </div>
    );
  }
}




function mapStateToProps(state){

  return{
    apiResponse: state.FetchWeatherReducer.weatherData,
    apiLocation : state.FetchWeatherLocation.location,
  }
}


function matchDispatchToProps(dispatch){
  
  return bindActionCreators({FetchAPIResponse:fetchAPIResponse}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Main);

