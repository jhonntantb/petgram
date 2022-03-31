import React from 'react'
import { useGetFavorites } from '../hooks/useGetFavs'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

const Favs = () => {
  const { data, loading, error } = useGetFavorites()

  if (loading) return <p>'loading....'</p>

  if (error) return (<pre> {error.message} </pre>)
  return (
    <Layout title='Tus favoritos' subtitle='Aqui se encuentran tus fotos favoritos'>
      <ListOfFavs favs={data.favs} />
    </Layout>
  )
}
export default Favs
