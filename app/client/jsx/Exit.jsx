import React, { Component } from 'react'
import { connect } from 'react-redux'
import avatars from './avatars.jsx'

class Exit extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="exit">
                <h1>Goodbye!</h1>
                <img src={avatars[5][this.props.avatar[1]]}/>
            </div>
        )
    }
}

export default connect(state => state, {})(Exit)

