import React from "react";

export class Status extends React.Component {
    state = {
        editMode: false
    }
    editState = (state)=>{
        this.setState({
            ...state,
            editMode: !state.editMode
        })
    }
    render() {
        if (this.state.editMode)
            return (<div>
                <input autoFocus={true} onBlur={()=>{this.editState(this.state)}} value={this.props.status}/>
            </div>)
        return (<div>
            <span onClick={()=>{this.editState(this.state)}} >{this.props.status}</span>
        </div>)
    }
}