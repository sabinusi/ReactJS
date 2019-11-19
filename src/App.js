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
import GithubState from './Context/GithubState'

const App =()=> {


  // async  componentDidMount () {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
  //   this.setState({loading:true})
  //  const res=await   axios
  //     .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //     this.setState({Users:res.data,loading:false})
  //   }
    
 

//    const showAlert=(msg,pr)=>{
// setAlert({msg,pr})
// setTimeout(()=>setAlert(null),2000)
//     }

 
    

    
        return ( 
          <GithubState>
          <Router>
          <div className = "App" >
              <MyNavbar  />
              <div className='container'>
              
                  <Alert />
                  <Switch>
                    <Route
                    path='/'
                    exact
                      render={props=>(
                        <Fragment>
                                <Serch />
                                <Users1 />
                        </Fragment>
                      )

                      }
                      />
                      <Route path='/about' component={About}/>
                      <Route path='/user/:login' exact render={props=>(
                      <User2  {...props} />
                      )} />
                      
                      
                    
                  </Switch>
              

              </div>
            </div>
            </Router>
            </GithubState>
        );
    
}



export default App;