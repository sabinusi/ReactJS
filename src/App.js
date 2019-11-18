import React, { useEffect,Fragment, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './component/layout/navbar'
import  Users1 from './component/users/Users'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Serch from './component/users/Serch';
import Alert from './component/layout/Alert';
import About from './component/users/About'
import { BrowserRouter as Router,Switch,Route }from 'react-router-dom';
import User2 from './component/users/User';

const App =()=> {
  const [Users,setUsers]=useState([]);
  const [loading,setLoading]=useState(false);
  const [User,setUser]=useState({});
  const [alert, setAlert]=useState(null);

  // async  componentDidMount () {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
  //   this.setState({loading:true})
  //  const res=await   axios
  //     .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //     this.setState({Users:res.data,loading:false})
  //   }
    
  const searchUsers=async text=>{
setLoading(true)
   const res=await   axios
   .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
      setUsers(res.data.items)
      setLoading(false)
    }
    
   const clearUser=()=>{
      setUsers([])
      setLoading(false)
    }
   const showAlert=(msg,pr)=>{
setAlert({msg,pr})
setTimeout(()=>setAlert(null),2000)
    }

   const searchUser=async username =>{
      const res1=await   axios
      .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      setUser(res1.data)
      setLoading(false)
    }
    

    
        return ( 
          <Router>

          
          <div className = "App" >
              <MyNavbar  />
              <div className='container'>
              
                  <Alert alert={alert}/>
                  <Switch>
                    <Route
                    path='/'
                    exact
                      render={props=>(
                        <Fragment>
                                <Serch searchUsers={searchUsers} clearUser={clearUser} showclear={Users.length > 0? true:false} showALert={showAlert}/>
                                <Users1 users={Users}  loading={loading}  />
                        </Fragment>
                      )

                      }
                      />
                      <Route path='/about' component={About}/>
                      <Route path='/user/:login' exact render={props=>(
                      <User2 {...props} getUser={searchUser} user={User} loading={loading}/>
                      )} />
                      
                      
                    
                  </Switch>
              

              </div>
            </div>
            </Router>
        );
    
}



export default App;