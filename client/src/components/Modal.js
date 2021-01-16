import React from 'react';
import "./Modal.css";

class Modal extends React.Component {
    state = {
        updatedFirstName: "",
        updatedLastName: "",
        updatedPlace: ""
    }

    handleOnChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    render () {
         return (
            <div>
                {/* <!-- Trigger the modal with a button --> */}
                

                {/* <!-- Modal --> */}
                <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Update</h4>
                    </div>
                    <div className="modal-body">
                        <input onChange={(e) => this.handleOnChange(e)} value={this.state.updatedFirstName} name="updatedFirstName" className="form-control modal-input" placeholder={this.props.firstname}/>
                        <input onChange={(e) => this.handleOnChange(e)} value={this.state.updatedLastName} name="updatedLastName" className="form-control modal-input" placeholder={this.props.lastname}/>
                        <input onChange={(e) => this.handleOnChange(e)} value={this.state.updatedPlace} name="updatedPlace" className="form-control modal-input" placeholder={this.props.place}/>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button onClick={ () => this.props.handleUpdateSubmit(this.props.id, this.state)} type="button" className="btn btn-warning" data-dismiss="modal">Submit</button>
                    </div>
                    </div>

                </div>
                </div>
            </div>
        )
    }
   
}

export default Modal;
