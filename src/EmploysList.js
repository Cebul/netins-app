import React, { Component } from 'react'

export class EmploysList extends Component {

  handleDelete = () => {
    this.props.onDelete(this.props.witchItem)
  }

  render() {
    return(
      <li className="media">
        <div className="media-left">
          <button className="employ-delete btn btn-xs btn-danger"
                  onClick={this.handleDelete}>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        </div>
        <div className="media-body">
          <div className="employ-number">
            <span className="label-item">Nr: </span>
            {this.props.number + 1}
          </div>
          <div className="employ-first-name">
            <span className="label-item">Imię: </span>
            {this.props.singleEmploy.firstName}
          </div>
          <div className="employ-last-name">
            <span className="label-item">Nazwisko: </span>
            {this.props.singleEmploy.lastName}
          </div>
        </div>
      </li>
    ) //return
  } // render
} //EmploysList classt
