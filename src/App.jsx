import React, { Component } from 'react'
import {TopBar,Header,Slider} from './Components'
class App extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render = ()=>{
    return(
      <>
        <TopBar/>
        <Header/>
        <Slider/>
      </>
    )
  }
}

export default App