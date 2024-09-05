import Book from './interfaces'

export const fetchBooks = (URL: string): Promise<Book[] | string> => {
  return fetch(URL)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Errore nel recupero dei libri')
      }
    })
    .then((arrayOfBooks) => {
      console.log(arrayOfBooks)
      return arrayOfBooks
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}
