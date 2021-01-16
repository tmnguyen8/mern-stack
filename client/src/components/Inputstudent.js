import React from 'react';
import axios from "axios";
import "./Inputstudent.css";

class Inputstudent extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        place: ""
    }
    handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = () => {
        console.log(this.state.firstname !=="" && this.state.lastname !=="" && this.state.place !=="")

        if(this.state.firstname !=="" && this.state.lastname !=="" && this.state.place !=="" ) {
            axios
                .post("/students", this.state)
                .then(res => {
                    console.log("sucessfully posted on DB");
                    this.setState({
                        firstname: "",
                        lastname: "",
                        place: ""
                    })
                })
                .catch (err => console.log(err.msg));
                
                // refreshing the page
                window.location = "/";
            
        }
    }
    render() {
        return (
            <div className="row text-center">
                <div className="col-md-4">
                    <form onSubmit={() => this.handleSubmit()}>
                        <input 
                            required
                            onChange={(e) => this.handleChange(e)} 
                            name="firstname" value={this.state.firstname} 
                            type="text" className="form-control form-input" 
                            placeholder="First Name"
                        />
                        <input 
                            required
                            onChange={(e) => this.handleChange(e)} 
                            name="lastname" value={this.state.lastname} 
                            type="text" className="form-control form-input" 
                            placeholder="Last Name"/>
                        <input 
                            onChange={(e) => this.handleChange(e)} 
                            name="place" value={this.state.place} type="text" 
                            className="form-control form-input" 
                            placeholder="Place"/>
                        <button type="submit" className="form-button btn">CREATE</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Inputstudent;
