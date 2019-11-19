import React,{useContext} from 'react';
 import {GithubContext} from '../../Context';
const Alert = () => {
const githubContext=useContext(GithubContext);
const {alert}=githubContext
console.log("alert is",alert)
    return (
      alert !== null && (
        <div className="alert alert-danger">
          <i className="fas fa-info-circle"></i> {alert.ms}
        </div>
          )
    );
}
 
export default Alert;