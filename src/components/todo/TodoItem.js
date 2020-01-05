import React, { Component } from 'react';

import PropType from 'prop-types';

export class TodoItem extends Component {
    static propType = {
        todo: PropType.object.isRequired,
        markComplete: PropType.func.isRequired,
        delTodo: PropType.func.isRequireds
    }

    getStyle = () => { 
        return  {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed? 'line-through' : 'none'
        }
    }
    
    render() { 
        const {title, id} = this.props.todo;
        return (
            <div style={this.getStyle()}> 
                <p>
                    <input type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)} 
                    />
                    {' '+title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id, title)} >x</button>
                </p>
            </div>
        )
    }
}


// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
