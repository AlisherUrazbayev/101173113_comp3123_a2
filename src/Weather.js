import React,{Component} from "react";
import axios from 'axios';


class Weather extends Component {

    state = {
        forecast: [],
        temp: [],
        clouds: [],
        country:[],
        wind: []
    };

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=ddc4d98225d970cb2f0c2b3faa46d658')
            .then(res =>{
                const weatherData = res.data;
                this.setState({forecast: weatherData});
                this.setState({temp: weatherData.main});
                this.setState({clouds: weatherData.weather[0]});
                this.setState({country: weatherData.sys.country});
                this.setState({wind: weatherData.wind});
        });
    }

    render() {


        return(
            <div>
                <p>City:{this.state.forecast.name} </p>
                <p>Country: {this.state.country}</p>
                <p>Wind speed: {this.state.wind.speed}</p>
                <p>Temperature: {this.state.temp.temp}</p>
                <p>Feels like: {this.state.temp.feels_like}</p>
                <p>Weather: {this.state.clouds.main}</p>
                <p>Description : {this.state.clouds.description}</p>
                <img src='http://openweathermap.org/img/wn/01n@2x.png' alt="Italian Trulli"/>
            </div>
        );
    }
}



export default Weather;




//<Icon id />
