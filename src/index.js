import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
//import './style/App.css'

class App extends React.Component{

    state = {lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude }),
            (err) => this.setState({errorMessage: err.message})
        );
    }
    
    renderContent() {
        
    }

    //React requires us to define render
    render(){

        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonsDisplay lat = {this.state.lat}/>
        }

        return <Spinner message = "Please accept location request"/>;
        
    };
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);


