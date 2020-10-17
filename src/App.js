import React, { Component } from 'react';
import './App.css';
import image from './profile/Nour.jpg'
// State implementation
class Person extends Component {
  constructor() {
      super()
      this.state = {
          fullName: "Nour Hsairi",
          bio: "11/09/1993",
          imgSrc: "Nour.jpg",
          profession: "Civil engineer",
          show: true,
          count: 0
      }
  }
  //button toggler
  toggler() { this.state.show ? this.setState({show: false}) : this.setState({show: true})}
  //component life cycle  
  componentDidMount() {
    setInterval(()=>{ 
      this.setState({
        count: this.state.count + 1 
      })
    }, 1000);
  }
  //this is displayed using inline style (like in the props checkpoint)
  render() {
      return <React.Fragment>
                <div className="App">
                  {this.state.show === true &&
                  <div>                    
                  <h1>{this.state.fullName}</h1>              
                  <h2>Living since: {this.state.bio}</h2>
                  <img width="300px" alt="Nour" src={image}></img>
                  <h2>Trying to work as a {this.state.profession}.</h2>  
                  </div> }
                  <button className="btnhs" onClick={()=> this.toggler()}>Hide and Show Button</button>
                  <h2>This component is {this.state.count} seconds old.</h2>
              </div> 
            </React.Fragment>
  }
}
export default Person;
