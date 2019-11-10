import React, { Component, useState } from 'react';
import '../App.css';

export default class TrainingEventComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            editable: false,
            name: props.data.Name,
            desc: props.data.Description,
            dept: props.data.Department,
            dura: props.data.Duration,
            date: props.data.Date,
            time: props.data.Time,
            loc: props.data.Location,
            updatename: props.data.Name,
            updatedesc: props.data.Description,
            updatedept: props.data.Department,
            updatedura: props.data.Duration,
            updatedate: props.data.Date,
            updatetime: props.data.Time,
            updateloc: props.data.Location,

        }
    }

    render() {
        const updateHandler = () => {
            this.setState({
                name: this.state.updatename,
                desc: this.state.updatedesc,
                dept: this.state.updatedept,
                dura: this.state.updatedura,
                date: this.state.updatedate,
                time: this.state.updatetime,
                loc: this.state.updatetime,
                editable: false
            });
        }
        const cancelHandler = () =>{
            this.setState({
                updatename: this.state.name,
                updatedesc: this.state.desc,
                updatedept: this.state.dept,
                updatedura: this.state.dura,
                updatedate: this.state.date,
                updatetime: this.state.time,
                updateloc: this.state.time,
                editable: false
            });
        }
        return (
            <div className="eventCard">
                {this.state.editable ?
                    <div>
                        <input
                            className="button"
                            type="button"
                            value="Cancel"
                            onClick={() => {cancelHandler() }}
                        />
                        <input
                        className="button"
                            type="button"
                            value="Update"
                            onClick={() => { updateHandler() }}
                        />
                        <br/> 
                        Course Name: 
                        <input
                        className="inputField"
                            type="text"
                            value={this.state.updatename}
                            onChange={(e) => this.setState({updatename: e.target.value})}
                        /> 
                        <br/>
                        Course Description: 
                        <input
                        className="inputField"
                            type="text"
                            value={this.state.updatedesc}
                            onChange={(e) => this.setState({updatedesc: e.target.value})}
                        /> 
                        <br/>
                        Course Department: 
                        <input
                        className="inputField"
                            type="text"
                            value={this.state.updatedept}
                            onChange={(e) => this.setState({updatedept: e.target.value})}
                        /> 
                        <br/>
                        Course Duration:
                        <input
                        className="inputField"
                            type="text"
                            value={this.state.updatedura}
                            onChange={(e) => this.setState({updatedura: e.target.value})}
                        /> 
                        <br/>
                        Course Date: 
                        <input
                        className="inputField"
                            type="text"
                            value={this.state.updatedate}
                            onChange={(e) => this.setState({updatedate: e.target.value})}
                        /> 
                        <br/>
                        Course Time: 
                        <input
                        className="inputField"
                            type="text"
                            value={this.state.updatetime}
                            onChange={(e) => this.setState({updatetime: e.target.value})}
                        /> 
                        <br/>
                        Course Location:
                        <input
                        className="inputField"
                            type="text"
                            value={this.state.updateloc}
                            onChange={(e) => this.setState({updateloc: e.target.value})}
                        /> 
                        <br/>
                    </div>
                    :
                    <div>
                        <div className="eventTitle">
                            <input
                            className="button"
                                type="button"
                                value="Edit"
                                onClick={() => { this.setState({ editable: true }) }}
                            />
                            {this.state.dept} | {this.state.name}


                        </div>
                        <div className="eventBody">
                            {
                                this.state.desc != null ? this.state.desc : ""
                            }
                            <br />
                            Starts {this.state.date} at {this.state.time} for {this.state.dura} in Room {this.state.loc}
                        </div>
                    </div>
                }




            </div>
        )
    }
}