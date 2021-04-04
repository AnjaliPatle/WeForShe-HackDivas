import React from 'react'
import '../Navigation/Navigation.css'
import logo from '../Images/myntra-logo.svg'

const Navigation = (props) => {
    return (
        <div className="nav-bar">
            <img src={logo} className="logo"/>
            WeForShe - Hackerramp submission by &nbsp;<strong>Team HackDivas</strong>
      </div>
    )
}
export default Navigation