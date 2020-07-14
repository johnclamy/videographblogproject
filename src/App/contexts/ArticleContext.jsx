import React, { createContext, useState } from 'react'

import { initialArticles } from '../../data/initial-articles'

export const ArticleContext = createContext()

export default function ArticleContextProvider (props) {
  const [ articles, setArticles ] = useState([ ...initialArticles ])
  const [ searchTerm, setSearchTerm ] = useState('')

  const onArticleRemove = id => {
    const filteredArticles = articles.filter(article => article.id !== id)
    setArticles(filteredArticles) 
  }

  const onSetArticleSearch = searchTerm => setSearchTerm(searchTerm)

  return (
    <ArticleContext.Provider
      value={{
        articles,
        searchTerm,
        onArticleRemove,
        onSetArticleSearch
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  )
}
