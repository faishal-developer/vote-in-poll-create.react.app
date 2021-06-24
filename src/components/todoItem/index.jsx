import React, { Component } from 'react'
import shortid from 'shortid'
import {Modal,ModalBody,ModalHeader} from 'reactstrap'
import ListView from './listview/index'
import TableView from './tableview/index'
import Controller from './controller/index'
import CreateTodoForm from './todo-form/todoform'


export default class Todos extends Component {
    state={
        todos:[
            {
                id:'dsfsdfds1',
                text:'main todo text one',
                description:'simple description one',
                time:new Date(),
                isComplete:false,
                isSelect:false
            },
            {
                id:'dsfsdfds2',
                text:'another task',
                description:'simple description one',
                time:new Date(),
                isComplete:false,
                isSelect:false
            },
            {
                id:'dsfjdfds3',
                text:'opposite task',
                description:'simple description one',
                time:new Date(),
                isComplete:false,
                isSelect:false
            }
        ],
        isOpenTodoForm:false,
        searchTerm:'',
        view:'list',
        filter:'all'
    }
    handleSearch=(value)=>{
        this.setState({searchTerm:value})
    }
    toggleForm=()=>{
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }
    
    handleFilter=(filter)=>{
        this.setState({filter})
    }
    clearCompleted=()=>{
        let todos=this.state.todos.filter(t=>!t.isComplete)
        this.setState({todos})
    }
    clearSelected=()=>{
        let todos=this.state.todos.filter(t=>!t.isSelect)
        this.setState({todos})
    }
    reset=()=>{
        this.setState({
            isOpenTodoForm:false,
            searchTerm:'',
            view:'list',
            filter:'all'
        })
    }
    changeView=(event)=>{
        this.setState({
            view:event.target.value
        })
    }

    toggleSelect=todoId=>{
        const todos=[...this.state.todos]
        const todo=todos.find(t=>t.id===todoId)
        todo.isSelect= !todo.isSelect

        this.setState({todos})
    }

    toggleComplete=todoId=>{
        const todos=[...this.state.todos]
        const todo=todos.find(t=>t.id===todoId)
        todo.isComplete= !todo.isComplete

        this.setState({todos})
    }
    createTodo=todo=>{
        todo.id=shortid.generate()
        todo.time=new Date()
        todo.isComplete=false
        todo.isSelect=false

        const todos=[todo,...this.state.todos]
        this.setState({todos})
        this.toggleForm()
    }

    performSearch=()=>{
        return this.state.todos.filter(todo=>(
            todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ))
    }

    performFilter=(todos)=>{
        const {filter} = this.state
        if(filter==='completed') return todos.filter(todo=>todo.isComplete)
        else if(filter==='running') return todos.filter(t=>!t.isComplete)
        else return todos
    }

    getView=()=>{
        let todos=this.performSearch()
        todos=this.performFilter(todos)
        return this.state.view==='list' ?(
            <ListView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
        ) : (
            <TableView
                    todos={todos}
                    toggleSelect={this.toggleSelect}
                    toggleComplete={this.toggleComplete}
                    />
        )
    }

    render() {
        return (
            <div>
                <h1 className='display-4 text-center mb-5'>Todos</h1>
                <Controller 
                    term={this.state.searchTerm}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    view={this.state.view}
                    handleFilter={this.handleFilter}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                />
                <div>
                    {this.getView()}
                </div>
                <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo}/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
