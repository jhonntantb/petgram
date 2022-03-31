import { useMutation, gql } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const useToggleLikeMutation = () => {
  const [toggleLikePhoto, { data, loading, error }] = useMutation(LIKE_PHOTO)
  return { toggleLikePhoto, data, loading, error }
}
