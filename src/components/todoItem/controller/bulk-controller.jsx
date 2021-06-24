import React from 'react'
import PropTypes from 'prop-types'
import { Button,ButtonGroup } from 'reactstrap'

function BulkController({clearSelected,clearCompleted,reset}) {
    return (
        <ButtonGroup>
            <Button color='danger' onClick={clearSelected}>Clear Selected</Button>
            <Button color='danger' onClick={clearCompleted}>clear Completed</Button>
            <Button color='danger' onClick={reset}>reset</Button>
        </ButtonGroup>
    )
}

BulkController.propTypes={
    clearCompleted: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default BulkController
