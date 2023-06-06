import React, { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
  showAlert: false,
}


function Register() {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({...values, isMember:!values.isMember});
  }
  
  const handleChange = (event) => {
    console.log(event.target);
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  }


  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow 
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email input */}
        <FormRow 
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow 
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>Submit</button>
        <p>
          {!values.isMember ? 'Already a member?' : 'Not a member yet?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register