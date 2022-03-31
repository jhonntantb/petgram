import React from 'react'
import { Link, Image } from './styles'
import { SvgSpin } from '../styles/loading'

// const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = SvgSpin, path, emoji = '?' }) => {
  return (
    <Link to={path}>
      <Image src={cover} />
      {emoji}
    </Link>
  )
}
