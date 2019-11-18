import React from 'react'
import img from '../../../src/3.gif'
import { element } from 'prop-types'
const Spinner=()=> {
    return (
    <element>
        <img src={img} alt="loading....." style={{width:'100',display:'block',margin:'auto',marginTop:'20rem'}}/>

    </element>
    )
}

export default Spinner
