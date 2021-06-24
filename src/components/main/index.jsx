import React, { Component } from 'react'
import shortid from 'shortid'
import {Container,Row,Col} from 'reactstrap'

import MainContent from './main-content/index'
import SideBar from './sidebar/index';


export default class PollProject extends Component {
    state={
        polls:[],
        selectedPoll:{},
        searchTerm:''
    }
    componentDidMount(){
        this.setState({polls:this.props.polls})
    }
    addNewPoll=poll=>{
        poll.id=shortid.generate()
        poll.created=new Date()
        poll.totalVote=0
        poll.opinion=[]

        this.setState({
            polls:this.state.polls.concat(poll)
        })
    }

    updatePoll=updatePoll=>{
        const polls=[...this.state.polls]
        const poll=polls.find(p=>p.id===updatePoll.id)

        poll.title=updatePoll.title
        poll.description=updatePoll.description
        poll.options=updatePoll.options

        this.setState({polls})
    }

    deletePoll=pollId=>{
        const polls=this.state.polls.filter(p=>p.id!==pollId)
        this.setState({polls,selectedPoll:{}})
    }

    selectPoll=pollId=>{
        const poll=this.state.polls.find(p=>p.id===pollId)
        this.setState({selectedPoll:poll})
    }

    handleSearch=(searchTerm)=>{
        this.setState({searchTerm})
    }

    performSearch=()=>{
        return this.state.polls.filter(poll=>
            poll.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    getOpinion=(response)=>{
        const {polls}=this.state
        const poll=polls.find(p=>p.id===response.pollId);
        const option=poll.options.find(p=>p.id==response.selectedOption)
        poll.totalVote++;
        option.vote++;
        const opinion={
            id: shortid.generate(),
            name: response.name,
            selectedOption: response.selectedOption
        }
        poll.opinion.push(opinion)
        this.setState({polls})
    }

    render() {
        const polls=this.performSearch()
        return (
            <Container className='my-5'>
                <Row>
                    <Col md={4}>
                        <SideBar 
                            submit={this.addNewPoll}
                            handleSearch={this.handleSearch} 
                            searchTerm={this.state.searchTerm}  
                            polls={polls}
                            selectPoll={this.selectPoll}
                        />
                    </Col>                    
                    <Col md={8}>
                        <MainContent
                            poll={this.state.selectedPoll}
                            getOpinion={this.getOpinion}
                            updatePoll={this.updatePoll}
                            deletePoll={this.deletePoll}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
