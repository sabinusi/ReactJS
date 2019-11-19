import React, { useState ,useContext} from 'react'
import PropTypes from 'prop-types';
import {GithubContext} from '../../Context'
const Serch=()=> {
    const githubContext=useContext(GithubContext)
const [text,setText]=useState('');
const {users,clearUsers,showALert}=githubContext;

const onChange=e=>{
setText(e.target.value)
}
const submit=(e)=>{
e.preventDefault();
if (text == '') {
 showALert('please add')
} else {
  
 githubContext.searchUsers(text)
setText('')
}

}


   
        return (
            <div>
                <form className="form" onSubmit={submit}  style={{"margin-top":'0.5rem'}} >
                    <input type="text" name="text" className="form-control" value={text} onChange={onChange} placeholder="Search user ..." />
                    <input type="text" className="form-control btn btn-dark btn-block" type="submit" style={{"margin-top":'1rem'}} value="search" />
                </form>
                {users.length > 0 && (
                <button className='btn btn-danger btn-block' style={{"margin-top":'0.3rem'}} onClick={clearUsers} >clear</button>
                )
                }
                
            </div>
        )
    
}
const propTypes={
    clearUser:PropTypes.func.isRequired,
    showclear:PropTypes.bool.isRequired,
    showALert:PropTypes.func.isRequired
}
export default Serch