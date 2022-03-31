import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto'

export const PhotoCardWithQuery = ({ detailId }) => {
  const { loading, data, error } = useGetSinglePhoto(detailId)

  if (loading) return 'loading....'

  if (error) return (<pre> {error.message} </pre>)

  const { photo = {} } = data

  return <PhotoCard {...photo} />
}
