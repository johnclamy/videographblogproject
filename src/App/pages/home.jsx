import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Alert from "react-bootstrap/Alert"

import ArticleContextProvider from '../contexts/ArticleContext'
import Articles from '../components/Articles'

export default function Home () {
  return (
    <ArticleContextProvider>
      <Container>
        <Row>
          <Col sm={9} lg={8}>
            <article className='articles-container'>
              <Articles />
            </article>
          </Col>
        </Row>
      </Container>
    </ArticleContextProvider>
  )
}