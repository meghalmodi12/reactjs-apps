import React from 'react';

class AddItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id : null,
            todo : ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);

        this.setState({
            id : null,
            todo : ''
        });
    }

    handleChange = (e) => {
        this.setState({
            id : Math.random(),
            todo : e.target.value
        });
    }

    render(){
        return (
            <div className="divAddItem">
                <form className="formAddItem" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.todo} />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default AddItem;