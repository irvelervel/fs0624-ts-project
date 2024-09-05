import { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
// import { fetchBooks } from '../lib/myFetch'
import Book from '../lib/interfaces'

// interface Book {
//   id: number
//   title: string
//   price: string
//   imageUrl: string
//   description: string
// }

const FetchComponent = () => {
  const URL = 'https://striveschool-api.herokuapp.com/food-books'

  const [books, setBooks] = useState<Book[]>([])

  const fetchBooks = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero dei libri')
        }
      })
      .then((arrayOfBooks) => {
        console.log(arrayOfBooks)
        setBooks(arrayOfBooks)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  // PRO VERSION (con fetch importata da file esterno)
  //   useEffect(() => {
  //     // faccio la fetch all'avvio
  //     fetchBooks(URL)
  //       .then((books) => {
  //         setBooks(books as Book[])
  //       })
  //       .catch((err) => {
  //         console.log(err as string)
  //       })
  //   }, [])

  return (
    <div>
      <h3>Recupero i libri dalle API!</h3>
      <Container>
        <Row className="justify-content-center">
          {books.map((b) => {
            return (
              <Col xs={12} md={4} lg={3} key={b.id}>
                <Card>
                  <Card.Img variant="top" src={b.imageUrl} />
                  <Card.Body>
                    <Card.Title>{b.title}</Card.Title>
                    <Card.Text>{b.description.slice(0, 70)}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default FetchComponent
