import React from 'react'
import PropTypes from 'prop-types'
import {ListGroup,ListGroupItem,CustomInput,Button} from 'reactstrap'


function ListItem({todo,toggleComplete,toggleSelect}) {
    return (
        <ListGroupItem className='d-flex align-items-center'>
            <CustomInput
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={()=>toggleSelect(todo.id)}
            />
            <div className='mx-3'>
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button onClick={()=>toggleComplete(todo.id)} className='ml-auto' color={todo.isComplete ? 'danger' : 'success'} >
                {todo.isComplete ? 'Completed' : 'Running'}
            </Button>
        </ListGroupItem>
    )
}

ListItem.propTypes={
    todo: PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}



const ListView=({todos,toggleComplete,toggleSelect})=>{
    return(
        <ListGroup>
            {todos.map(todo=>(
                <ListItem
                key={todo.id}
                todo={todo}
                toggleSelect={toggleSelect}
                toggleComplete={toggleComplete}
            />
            ))}
        </ListGroup>
    )
}
ListView.propTypes={
    todos: PropTypes.array.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}

export default ListView
