import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  const { registerMutation, loading, error } = useRegisterMutation()
  const { loginMutation, loadingLogin, errorLogin } = useLoginMutation()

  const errorMsg = error && 'El Usuario  ya existe o hay algún problema'
  const errorLoginMsg = errorLogin && 'El usuario o la contraseña son incorrectos'

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables })
      .then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  return (
    <>
      <UserForm disable={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
      <UserForm disable={loadingLogin} onSubmit={onSubmitLogin} error={errorLoginMsg} title='Iniciar Sesion' />
    </>
  )
}

export default NotRegisteredUser
