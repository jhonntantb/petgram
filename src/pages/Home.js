import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const HomePage = () => {
  const { id } = useParams()
  return (
    <>
      <Helmet>
        <title>Tu app de fotos de mascotas</title>
        <meta name='description' content='Con Petgram puedes encontrar fotos de animales domesticos muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}

const Home = React.memo(HomePage)

export default Home
