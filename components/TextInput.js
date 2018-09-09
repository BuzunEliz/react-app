import React from 'react'

class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.input = React.createRef()
    }
    onBtnClickHandler = () => {
        fetch('https://api.tfl.gov.uk/BikePoint/Search?query='+this.input.current.value)
            .then(response => response.json())
            .then(data => {this.props.updateData(data)})

    }
    render() {
        return (
            <React.Fragment>
                <div className='search-field'>
                    <input
                        defaultValue=''
                        ref={this.input}
                    />
                    <button className="search-button" onClick={this.onBtnClickHandler}>Search</button>
                </div>
            </React.Fragment>
        )
    }
}

export { TextInput }
