import React, { useEffect, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import {Row,Col,ButtonToolbar,Button} from 'react-bootstrap';
 
const User=({user,loading,getUser,match})=> {

  useEffect(()=>{
    getUser(match.params.login)
    //eslint-disable-next-line
  },[])
   
        const{
            name,avatar_url,location,bio,blog,login,following,html_url,hireable,company
          }=user;
        
          if(loading) return (<Spinner/>)
        return (

           <Fragment>
                <Row style={{'margin-top':'1erm'}}>
                <Col>
               <Link to='/'  > <Button variant="secondary" className="form-control">Back to search</Button> </Link>
               <br/>
              hireable:{''}
              {hireable ? (<i className="fa fa-check text-success"><h3>Yes</h3></i>):( <i className="fa fa-times-circle text-danger"><h3>No</h3></i> )}

            
                <div className="card center" >
                    <Row>
                        <Col>
                        <img className="card-img-top" src={avatar_url}   alt="Card image cap" style={{width: '18rem'}} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Location : {location}</p>
                    </div>
                        </Col>
                        <Col>
                        <div className="card center" >
                    <div className="card-body">
                    <div>
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                    </div>
                    <a href={html_url} className="btn btn-dark">VisitGithub Profile</a>
                    <ul>
                        <li>
                            {login &&(
                                <Fragment>
                                    <strong> Username: </strong>{login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website :</strong> {company}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                    </div>
                    </div>
                        </Col>
                    </Row>
                   
                   
                    </div>
               </Col>
               
             </Row>
           </Fragment>
        )
    
}


export default User;
