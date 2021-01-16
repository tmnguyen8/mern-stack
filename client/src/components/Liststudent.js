import React from 'react';
import axios from "axios";
import StudentCard from "./StudentCard";

class Liststudent extends React.Component {
    state = {
        students : [],

    }
    getStudents = () => {
        axios.get("/students")
            .then(res => {
                // console.log(res);
                this.setState({students: res.data})
                
            })
            .catch(err => console.log(err))
            
    }

    handleDelete (id) {
        axios.delete(`/student/${id}` )
            .then(res => {
                console.log(res)
                window.location = "/";
            })
            .catch(err => console.log(err))
    }

    handleUpdate (id, object) {
        console.log(object)
        axios.put(`/student/${id}`, 
            {
                firstname: object.updatedFirstName,
                lastname: object.updatedLastName,
                place: object.updatedPlace
            }
        ).then( res => {
                console.log("updated")
                window.location = "/";
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getStudents();
    }

    render() {

        return (
            <div>
                {
                    this.state.students.map(student => {
                        return (
                            <StudentCard 
                                key = {student._id}
                                id = {student._id}
                                firstname = {student.firstname}
                                lastname = {student.lastname}
                                place = {student.place}
                                handleDelete = {this.handleDelete}
                                handleUpdate = {this.handleUpdate}
                            />
                        )
                        
                    })
                }
            </div>
        )
    }
}

export default Liststudent;