import React from 'react'
import Proptypes from 'prop-types'
import {Label,CustomInput} from 'reactstrap'

function ViewController({view,changeView}) {
    return (
        <div className='d-flex'>
            <Label for='list-view' className='mr-4'>
                <CustomInput
                    type='radio'
                    name='view'
                    value='list'
                    id='list-view'
                    onChange={changeView}
                    className='d-inline-block'
                    checked={view==='list'}
                />
                List View
            </Label>
            <Label for='table-view' className='mr-4'>
                <CustomInput
                    type='radio'
                    name='view'
                    value='table'
                    id='table-view'
                    onChange={changeView}
                    className='d-inline-block'
                    checked={view==='table'}
                />
                Table View
            </Label>
        </div>
    )
}

ViewController.propTypes={
    view: Proptypes.string.isRequired,
    changeView: Proptypes.func.isRequired
}

export default ViewController
