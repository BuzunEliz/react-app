import React from 'react'


class BikePointCondition extends React.Component {
    state = {
        condition: [],
    }
    componentDidMount(){
        fetch('https://api.tfl.gov.uk/BikePoint/'+this.props.bikeId)
            .then(response => response.json())
            .then(data => {this.setState({condition: data})})
    }
    render() {
        const data=this.state.condition
        let pointsTemplate
        if (Object.keys(data).length !== 0) {
            pointsTemplate = <div key={data.id}>
                <div  className="bike-points-condition__nb-bikes">
                    <p>Bikes for hire: <span>{data.additionalProperties[6].value}</span></p>
                </div>
                <div  className="bike-points-condition__nb-empty-docks">
                    <p>Empty docking bays: <span>{data.additionalProperties[7].value}</span></p>
                </div>
                <div  className="bike-points-condition__nb-docks">
                    <p>Total capacity at this docking station is: <span>{data.additionalProperties[8].value}</span></p>
                </div>
            </div>
        } else {
            pointsTemplate = <p>Loading</p>
        }
        return (
            <div className="bike-points-condition">
                {pointsTemplate}
            </div>
        );
    }
}

export { BikePointCondition }