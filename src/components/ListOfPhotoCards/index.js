import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useGetPhotos(categoryId)

  if (loading) return <p>'loading....'</p>

  if (error) return (<pre> {error.message} </pre>)
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
