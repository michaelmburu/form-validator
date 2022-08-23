import { useState } from 'react'

export default function FormValidator () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [message, setMessage] = useState('')
    
    const formValidate = () => {
        // create an array to store all error messages
        const errors = []

        //check if all fields exist
        if(!email || !password || !passwordConfirm) errors.push('All fields must be filled in')

        // Check email field for @ sign
        if([...email].filter(i => i === '@').length !== 1){
            errors.push('An email must have an one @ sign')
        }

        //Check password length is greater than 8
        if(password.length < 8) errors.push('Password must be 8 characters or longer')

        //Check if password equals confirm password
        if(password !== passwordConfirm) errors.push('Password must match')

        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const errors = formValidate()
        setMessage(errors.length ? errors.join(', ') : 'User Created')
    }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      {message}
      <input type='submit' value='Submit' />
    </form>
  )
}