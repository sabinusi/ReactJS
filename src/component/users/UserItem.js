import React, { PureComponent } from 'react'
import {Button,Card} from 'react-bootstrap';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const UserItem =({user:{login,avatar_url,html_url}})=>{
    console.log("fghjk")
return(
            <Card style={{ width: '18rem',textAlign:'center' }}  >
              <Card.Img variant="top" src={avatar_url} className='rounded-top' />
                <Card.Body>
                    <h3>{login}</h3>
                    <Link to={`/user/${login}`} variant="primary">More</Link>
                </Card.Body> 
            </Card>
)
        
    }

UserItem.prototype={
    user:PropTypes.object.isRequired
}
export default UserItem