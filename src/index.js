import React from 'react';
import ReactDOM from 'react-dom'
import SeassonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessage: ''};

    // Good for data loading!
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            postion => this.setState({lat: postion.coords.latitude, errorMessage: ''}),
            err => this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeassonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Pelase, accept location request!" />;
    };
    
    render() {
        return (
            <div className="border red"></div>
        );
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));