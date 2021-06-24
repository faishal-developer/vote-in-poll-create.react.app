import React from 'react'
import PropTypes from 'prop-types'
import {Row,Col} from 'reactstrap'
import SearchPanel from './search-panel'
import FilterController from './filter-controller'
import ViewController from './view-controller'
import BulkController from './bulk-controller'

const Controller=({clearCompleted,clearSelected,reset,view,changeView,term,handleSearch,toggleForm,handleFilter})=> {
    return (
        <div>
            <SearchPanel
                term={term}
                handleSearch={handleSearch}
                toggleForm={toggleForm}
            />
            <Row className='my-4'>
                <Col md={{size:4}}>
                    <FilterController handleFilter={handleFilter}/>
                </Col>
                <Col md={{size:4}}>
                    <ViewController view={view} changeView={changeView}/>
                </Col>
                <Col className='d-flex' md={{size:4}}>
                    <div className='ml-auto'>
                    <BulkController
                        clearCompleted={clearCompleted}
                        clearSelected={clearSelected}
                        reset={reset}
                    />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

Controller.propTypes={
    term: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default Controller