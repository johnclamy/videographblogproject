import React, { useContext } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import { ArticleContext } from '../contexts/ArticleContext'
import Article from './Article'

export default function Articles (props) {
  const { articles } = useContext(ArticleContext)

  return (
    <ListGroup variant="flush">
      {articles.map(article =>
        <Article
          key={article.id}
          id={article.id}
          source={article.source}
          title={article.title}
          description={article.description}
          url={article.ulr}
          publishedAt={article.publishedAt} 
        />          
      )}
    </ListGroup>
  )
}