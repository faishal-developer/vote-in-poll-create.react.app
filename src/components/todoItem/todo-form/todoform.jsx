import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'

export default class CreateTodoForm extends Component {
    state={
        text:'',
        description:''
    }

    handleChange=event=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSUbmit=event=>{
        event.preventDefault()
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({
            text:'',
            description:''
        })
    }
    render() {
        return (
            <Form onSubmit={this.handleSUbmit}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input
                        placeholder='do some code'
                        name='text'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Describe Task</Label>
                    <Input
                        type='textarea'
                        placeholder='write your description on your task'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type='submit'>Create a new task</Button>
            </Form>
        )
    }
}

CreateTodoForm.propTypes={
    createTodo:PropTypes.func.isRequired

}
