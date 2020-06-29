import React from 'react';
import ReactDOM from 'react-dom';
import Items from './Items';
import AddItem from './AddItem';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            items : []
        };
    }

    addTodo = (todo) => {
        var newArr = this.state.items;
        newArr.push(todo);

        this.setState({
            items: newArr
        });
    }

    deleteTodo = (id) => {
        var newArr = this.state.items.filter(item => {
            return item.id !== id
        });

        this.setState({
            items: newArr
        });
    }

    render(){
        return (
            <div>
                <AddItem addTodo={this.addTodo} />
                <Items todoItems={this.state.items} deleteItem={this.deleteTodo} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

