/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Routes, Route, Navigate } from 'react-router-dom'
import Logo from './components/Logo'
import { Context } from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))
const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const User = React.lazy(() => import('./pages/User'))
const NotFound = React.lazy(() => import('./components/NotFound'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NavBar = React.lazy(() => import('./components/NavBar'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
        <Route exact path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
        <Route exact path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <NavBar />
    </Suspense>
  )
}
