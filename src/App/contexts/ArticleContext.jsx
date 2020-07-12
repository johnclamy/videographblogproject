import React, { createContext, useState } from 'react'

import { initialArticles } from '../../data/initial-articles'

export const ArticleContext = createContext()

export default function ArticleContextProvider (props) {
  const { articles, setArticles } = useState(...initialArticles)

  return (
    <ArticleContext.Provider
      value={articles}
    >
      {props.children}
    </ArticleContext.Provider>
  )
}
