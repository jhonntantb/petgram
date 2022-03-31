import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

const useCategoryData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // eslint-disable-next-line no-undef
    fetch('https://petgram-server-jhonntan.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
    setLoading(false)
  }, [])

  return { categories, loading }
}

const ListOfCategoriescomponent = () => {
  const { categories, loading } = useCategoryData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed, loading) => {
    return (
      <List fixed={fixed}>
        {
        categories.map(category =>
          <Item key={category.id}>
            <Category {...category} loading={loading} path={`/pet/${category.id}`} />
          </Item>)
        }
      </List>
    )
  }

  return (
    <>
      {renderList(false, loading)}
      {showFixed && renderList(true, loading)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriescomponent)
