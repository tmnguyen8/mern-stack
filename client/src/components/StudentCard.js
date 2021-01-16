import React, { Component} from 'react';
import "./StudentCard.css";
import Modal from "./Modal";


class StudentCard extends Component {

    render () {
        return (
            <div className="card student-card" >
                <div className="card-body">
                    <h2>First Name: {this.props.firstname}</h2>
                    <h2>Last Name: {this.props.lastname}</h2>
                    <h3>Place: {this.props.place}</h3>
  
                    <button type="button" class="btn btn-warning student-button" data-toggle="modal" data-target="#myModal">Update</button>
                    <button onClick={() => this.props.handleDelete(this.props.id)} className="btn btn-danger student-button">Delete</button>
                    <Modal 
                        id = {this.props.id}
                        firstname = {this.props.firstname}
                        lastname = {this.props.lastname}
                        place = {this.props.place}
                        handleUpdateSubmit = {this.props.handleUpdate}
                    />
                </div>
            </div>
        )
    }

}

export default StudentCard;
