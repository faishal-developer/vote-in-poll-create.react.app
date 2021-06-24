import React from 'react'
import PropTypes from 'prop-types'

const InputCustom=(props)=>{
    //console.log(props.error)
    return (<div>
        <label htmlFor={props.id}>{props.data}</label>
        <input 
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            name={props.name}
            id={props.id}
            onChange={props.handleChange}
        />
       
    </div> )
};
//{props.error ? <div>props.error</div> : ''}
InputCustom.propTypes={
    name:PropTypes.string.isRequired,
    //value:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    handleChange:PropTypes.func.isRequired
}
InputCustom.defaultProps={
    type:'text',
    placeholder:'',
}
export default InputCustom