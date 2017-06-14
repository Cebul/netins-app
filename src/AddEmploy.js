import React, { Component }from 'react'

export class AddEmploy extends Component {

  toggleEmpDisplay = () => {
    this.props.handleToggle()
  }

  render() {

    const displayAddBody = {
      display: this.props.bodyVisible ? 'block' : 'none'
    }

    return(
      <div className="panel panel-primary">
        <div className="panel-heading emp-addheading" onClick={this.toggleEmpDisplay}>
        <span className="glyphicon glyphicon-plus"></span> Add New Employee</div>
        <div className="panel-body" style={displayAddBody}>
          <form className="add-employ form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="firstName">First Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="petName" ref="inputPetName" placeholder="First Name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="lastName">Last Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="petOwner" ref="inputOwnerName" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="aptDate">Date</label>
              <div className="col-sm-4">
                <input type="date" className="form-control"
                  id="aptDate" ref="inputAptDate" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary pull-right">Add Employee</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    ) //return
  } //render
} //AddEmploy
