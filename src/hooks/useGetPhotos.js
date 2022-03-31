import { useQuery, gql } from '@apollo/client'

const GET_PHOTO_BY_CATEGORY = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const useGetPhotos = (categoryId) => {
  const { loading, data, error } = useQuery(GET_PHOTO_BY_CATEGORY, { variables: { categoryId } })
  return { loading, data, error }
}
