import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'
import { EmploysList } from './EmploysList'
import _ from 'lodash'
import { AddEmploy } from './AddEmploy'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      empBodyVisible: false,
      employs: []
    }// state
  } //constructor

  componentDidMount() {
    this.serverRequest = $.get('./data.json', (result) => {
      const listEmploys = result
      this.setState({
        employs: listEmploys
      })
    })
  } //componentDidMount

  componentWillUnmount() {
    this.serverRequest.abort()
  } //componentWillUnmount

  deleteEmploy = (item) => {
    let allEmploys = this.state.employs
    let newEmploys = _.without(allEmploys, item)
    this.setState({
      employs: newEmploys
    }) //setState
  } //deleteEmploy

  toggleAddDisplay = () => {
    let tempVisibility = !this.state.empBodyVisible
    this.setState({
      empBodyVisible: tempVisibility
    }) //setState
  } //toggleAddDisplay

  render() {

    let allEmploys = this.state.employs
    allEmploys = allEmploys.map((item, index) => (
          <EmploysList key={index}
                       singleEmploy={item}
                       number={index}
                       witchItem={item}
                       onDelete={this.deleteEmploy} />
      ) //return
    ) // allEmpoys.map

    return (
      <div className="App">
        <div className="interface">
         <h3>Employees List</h3>
          <ul className="item-list media-list">
            {allEmploys}
          </ul>
        </div>
        <AddEmploy bodyVisible={this.state.empBodyVisible}
                   handleToggle={this.toggleAddDisplay}/>
      </div> //App
    ) //return
  } // render
} //App

export default App;
