import React, { useState } from 'react'

import { createContext, useContextSelector } from 'use-context-selector'

type SelectBooks = {
  book: string
  changeBook: (text: string) => void
}

const ContextBooks = createContext({} as SelectBooks)

const BooksProvider: React.FC = ({ children }) => {
  const [book, setBook] = useState('')

  async function changeBook(text: string) {
    setBook(text)
  }

  return (
    <ContextBooks.Provider value={{ book, changeBook }}>
      {children}
    </ContextBooks.Provider>
  )
}

export default BooksProvider

export const useBooks = () => {
  const book = useContextSelector(ContextBooks, (state) => state.book)
  const changeBook = useContextSelector(
    ContextBooks,
    (state) => state.changeBook
  )

  return {
    book,
    changeBook,
  }
}
