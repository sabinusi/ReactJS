import React, { PureComponent, Component } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'


import  {Row,Col} from 'react-bootstrap'
const Users1 =({users,loading}) => {
    if (loading) {
        return(
            <Spinner/>
        )
    } else {
        return (
            <Row >
                {users.map(user=>{
                    return(
                        <Col xs={4} style={{marginTop:'1rem'}} >
                            <UserItem key={user.id} user={user} />
                            </Col>
                    )
                })}
            </Row>
        )
    }
       
} 
const propTypes={
    users:PropTypes.object.isRequired,
    loading:PropTypes.bool.isRequired,
}

export default Users1