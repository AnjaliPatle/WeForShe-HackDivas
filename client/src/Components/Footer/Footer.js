import React from 'react'
import './Footer.css'

function Footer() {

    return (
        <footer className="footerWrapper">
            <div className="footerContainer">
                <div className="disclaimer">
                    You need to allow access to video and audio to place calls.<br/>
                    Cuckoo is fully Open Source and does not store any data on its servers.
                </div>
            </div>
        </footer>
    )

}

export default Footer