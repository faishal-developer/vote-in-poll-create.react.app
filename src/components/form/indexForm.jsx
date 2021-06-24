import React from 'react'
import InputCustom from './inputElement'

let initialState={
    values:{
        name:'',
        email:'',
        password:'',
        birthDate:'',
        gender:''
    },
    agreement:false,
    error:{}
    
};
class SimpleForm extends React.Component{
    state=initialState
    handleChange=(e)=>{
        this.setState({
            values:{
                ...this.state.values,
                [e.target.name]:e.target.value
            }
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        let {isvalid,error}=this.validate()
        console.log(error)
        if(isvalid){
            e.target.reset()
            this.setState({...initialState})
            console.log(this.state)
        }else{
            this.setState((prev)=>{
                this.state.error=error
               return {
                   error:error
               }
            })
            console.log(this.state,'error')
        }
    }
    agreement=(e)=>{
        if(e.target.checked){
            this.setState({
                agreement:true
            })
        }
    }
    validate=()=>{
        let error={}
        if(!this.state.values.name)error.name='Provide your Name'
        if(!this.state.values.email)error.email='Provide your Email'
        if(!this.state.values.password)error.password='Provide your Password'
        if(!this.state.values.birthDate)error.birthDate='Provide your birthDate'
        if(!this.state.values.gender)error.gender='Provide your gender'
        
        return {
            isvalid:Object.keys(error).length===0,
            error
        }
    }

    render(){
        let {name,email,password,birthDate,gender}=this.state.values
        return (<form onSubmit={this.submitHandler}>
            <InputCustom error={this.state.error.name} name='name' value={name} placeholder='Mr. Jhon' data='Enter Name' handleChange={this.handleChange}/>
            {this.state.error.name && <div style={{color:'red'}}>{this.state.error.name}</div>}
            <InputCustom error={this.state.error.email} type='email' name='email' value={email} placeholder='example@gmail.com' data='Enter Email' handleChange={this.handleChange}/>
            {this.state.error.email && <div style={{color:'red'}}>{this.state.error.email}</div>}
            <InputCustom error={this.state.error.password} type='password' name='password' value={password}  data='Enter password' handleChange={this.handleChange}/>
            {this.state.error.password && <div style={{color:'red'}}>{this.state.error.password}</div>}
            <InputCustom error={this.state.error.birthDate} type='date' name='birthDate' value={birthDate} data='Enter birth date' handleChange={this.handleChange}/>
            {this.state.error.birthDate && <div style={{color:'red'}}>{this.state.error.birthDate}</div>}
            <InputCustom type='radio' id='male' name='gender' value='Male' data='Male' handleChange={this.handleChange}/>
            <InputCustom error={this.state.error.gender} type='radio' id='female' name='gender' value='Female' data='Female' handleChange={this.handleChange}/>
            <InputCustom type='checkbox' id='agreement' name='agreement' value={this.state.agreement} data='I agree' handleChange={this.agreement}/>
            <input type='submit' disabled={!this.state.agreement} value='log in'/>
        </form>)
    }
}
export default SimpleForm