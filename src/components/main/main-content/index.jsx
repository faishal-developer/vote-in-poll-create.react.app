import React, { Component } from 'react'
import {Modal,ModalHeader,ModalBody} from 'reactstrap'

import ParticipationForm from './participate-form'
import PollForm from '../poll-form/index'

export default class MainContent extends Component {
    state={
        openModal: false
    }

    toggleModal=()=>{
        this.setState({
            openModal:!this.state.openModal
        })
    }
    render() {
        if(Object.keys(this.props.poll).length===0){
            return (
                <div>
                    <h3>welcome to My Application</h3>
                    <p>
                        you can create as many poll as you wish .
                        thia is i fjjfl ihi sih ollfj kfi e kdkkd
                    </p>
                </div>
            )
        }

        const {poll,getOpinion,updatePoll,deletePoll}=this.props
        return (
            <div>
                <h3>{poll.title}</h3>
                <p>{poll.description}</p>
                <br/>
                <ParticipationForm
                    poll={poll}
                    getOpinion={getOpinion}
                    toggleModal={this.toggleModal}
                    deletePoll={deletePoll}
                />
                <Modal 
                    isOpen={this.state.openModal}
                    toggle={this.toggleModal}
                    unmountOnClose={true}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Update Poll
                    </ModalHeader>
                    <ModalBody>
                        <PollForm
                            poll={poll}
                            isUpdate={true}
                            submit={updatePoll}
                            buttonValue='Update Poll'
                        />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
