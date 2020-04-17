import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import reducers from './reducers.jsx'
import { Link, Redirect } from 'react-router-dom'

class Welcome extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            displayName: this.props.displayName,
            avatar: this.props.avatar,
            redirect: null
        }
    }


    // TODO only sound for art?
    // TODO error checking for name (shouldn't be empty)
    // TODO see if there's option to hide room link
    // TODO redirect from /party
    // TODO create avatars 
    // TODO skins / backgrounds for each room
    // TODO need to disable the ability to hang up I think
    // TODO persist video/sound on/off
    // ================================
    // TODO handle room capacity
    // TODO look into emby video stream service

    handleDisplayNameChange(event) {
        this.setState({ displayName: event.target.value })
    }

    handleReady() {
        this.props.updateDisplayName(this.state.displayName)
        this.props.updateCurrentRoom('Vestibule')
        this.setState({ redirect: '/party' })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <div className="vestibule">
                <h1>Welcome have fun</h1>
                <div className="display-name">
                    <input type="text" placeholder="name" name="name" minLength="1" onChange={this.handleDisplayNameChange.bind(this)}/>
                    <input type="button" onClick={this.handleReady.bind(this)} value="Party!"/>
                </div>
                <Link to="/about" activeclassname="active">About</Link>
            </div>
        )
    }
}

export default connect(
    state => state, 
    {
        updateDisplayName: reducers.updateDisplayNameActionCreator,
        updateCurrentRoom: reducers.updateCurrentRoomActionCreator
     })(Welcome)