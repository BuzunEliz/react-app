import React from 'react';
import { BikePoints } from './components/BikePoints'
import { TextInput } from './components/TextInput'
import './App.css';

class App extends React.Component {
    state = {
        visible: false,
        textEntered: false,
        bikePoints: [],
    }
    updateData = (value) => {
        this.setState({ bikePoints: value, visible: true, textEntered:true })
    }

    render() {
        let pointsTemplate
        if (this.state.textEntered) {
            pointsTemplate = <BikePoints data={this.state.bikePoints}/>
        }
        return (
            <div className="content">
                <h2>Search for bike stations by their name</h2>
                <TextInput updateData={this.updateData}/>
                {pointsTemplate}
            </div>
        )
    }
}

export default App
