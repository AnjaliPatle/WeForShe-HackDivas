import React from 'react'
import Shirts from './Components/Shirts/Shirts'

export default function Products(props) {
    return (
        <Shirts add={props.add} />
    )
}
