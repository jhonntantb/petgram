import React from 'react'
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'

const Detail = () => {
  const { detailId } = useParams()
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery detailId={detailId} />
    </Layout>
  )
}
export default Detail
