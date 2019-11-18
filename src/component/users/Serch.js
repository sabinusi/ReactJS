import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Serch=({searchUsers,clearUser,showALert,showclear})=> {
const [text,setText]=useState('');

const onChange=e=>{
setText(e.target.value)
}
const submit=(e)=>{
e.preventDefault();
if (text == '') {
 showALert('please add ','danger')
} else {
  searchUsers(text)
setText('')
}

}

   
        return (
            <div>
                <form className="form" onSubmit={submit}  style={{"margin-top":'0.5rem'}} >
                    <input type="text" name="text" className="form-control" value={text} onChange={onChange} placeholder="Search user..." />
                    <input type="text" className="form-control btn btn-dark btn-block" type="submit" style={{"margin-top":'1rem'}} value="search" />
                </form>
                {showclear && (
                <button className='btn btn-danger btn-block' style={{"margin-top":'0.3rem'}} onClick={clearUser} >clear</button>
                )
                }
                
            </div>
        )
    
}
const propTypes={
    searchUsers:PropTypes.func.isRequired,
    clearUser:PropTypes.func.isRequired,
    showclear:PropTypes.bool.isRequired,
    showALert:PropTypes.func.isRequired
}
export default Serch