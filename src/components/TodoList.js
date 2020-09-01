import React, { Component } from 'react';
import Item from './TodoItem';

export default class TodoList extends Component {
    render() {
        return (
            <section>
                <h3>Hello from Todo List</h3>
                <Item></Item>
            </section>
        )
    }
}
