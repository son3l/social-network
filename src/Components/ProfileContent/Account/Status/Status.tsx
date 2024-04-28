import * as React from "react";

interface PropsType {
    status: string,
    fetchStatusThunkCreator: (arg: any) => void
}

interface StateType {
    editMode: boolean,
    status: string
}

export class Status extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status)
            this.setState({...this.state, status: this.props.status})
    }

    editState = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode,
        })

    }

    saveState = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode,
        })
        this.props.fetchStatusThunkCreator({action: 'put', status: this.state.status})
    }

    inputStatus(event) {
        this.setState({...this.state, status: event.currentTarget.value});
    }

    render() {
        if (this.state.editMode)
            return (<div>
                <input onChange={this.inputStatus.bind(this)} autoFocus={true} onBlur={() => {
                    this.saveState()
                }} value={this.state.status}/>
            </div>)
        return (<div>
            <span onClick={() => {
                this.editState()
            }}>{this.props.status || '----'}</span>
        </div>)
    }
}