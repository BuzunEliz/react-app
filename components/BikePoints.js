import React from 'react'
import { BikePointCondition } from './BikePointCondition'

class BikePoints extends React.Component {
    render() {
        const data=this.props.data
        let pointsTemplate
        if (data.length>0) {
            pointsTemplate = data.map(function(item) {
                return (
                    <div className="bike-points__item" key={item.id}>
                        <p className="bike-points__name">{item.commonName}</p>
                        <BikePointCondition bikeId={item.id}/>
                    </div>
                )
            })
        } else {
            pointsTemplate = <p className="bike-points__failure">Your search did not match any bike stations. So just take a deep breath, breathe through it, try again.</p>
        }
        return (
            <div className="bike-points">
                <p className="bike-points__counter">Results: {data.length}</p>
                {pointsTemplate}
            </div>
        );
    }
}

export { BikePoints }