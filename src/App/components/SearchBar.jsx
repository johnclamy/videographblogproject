import React, { useContext, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { ArticleContext } from '../contexts/ArticleContext'

export default function SearchBar () {
  const { onSetArticleSearch } = useContext(ArticleContext)
  const [ inputTerm, setInputTerm ] = useState('')

  const handleChange = e => {
    setInputTerm(e.target.value)
    onSetArticleSearch(inputTerm)
  }

  return (
    <Form className='d-flex justify-content-between'>
      <Form.Control
        type='text'
        size='lg'
        value={inputTerm}
        placeholder='Search articles...'
        onChange={handleChange}
      />
      <Button
        style={{
          marginLeft: '.75rem',
          backgroundColor: 'var(--app-dark-blue)',
          border: 'none'
        }}
        type='button'
      >
        <FaSearch />
      </Button>
    </Form>
  )
}