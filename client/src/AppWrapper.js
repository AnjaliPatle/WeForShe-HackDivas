import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import App from './App'
import Footer from './Components/Footer/Footer'
import './app-wrapper.css'

export default function AppWrapper() {
    const [isCallOpen,setIsCallOpen]=React.useState(false)
    return (
        <div className="outer-window">
            <Navigation/>
            <div className="inner-window">
                <App  open={isCallOpen} setOpen={setIsCallOpen}/>
            </div>
        {/*   <Footer/>*/}
        </div>
    )
}
