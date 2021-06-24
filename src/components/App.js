import React from 'react'
import polls from '../data/poll'
import PollProject from './main/index.jsx'


class App extends React.Component{
 
  render(){
    return (
      <div>
        <PollProject polls={polls}/>
      </div>
    )  
    
  }
}
export default  App

