import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Button, Input, Title, Error } from './styles'

export const UserForm = ({ disable, error, title, onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form disable={disable} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disable} placeholder='Email' type='email' {...email} />
        <Input disabled={disable} placeholder='Password' type='password' {...password} />
        <Button disabled={disable}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
