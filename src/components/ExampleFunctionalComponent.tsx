import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

interface ExampleFunctionalComponentProps {
  myprop: string
  altra: number
}

interface DataObject {
  title: string
}

const ExampleFunctionalComponent = ({
  myprop,
  altra,
}: ExampleFunctionalComponentProps) => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('Mario')

  const [data, setData] = useState<null | DataObject>(null)
  // type inference FAILED! il nostro valore iniziale di null ha fatto
  // dedurre a TS che il TIPO di data è "null" (un tipo null prevede
  // come UNICO valore possibile null)

  // soluzione: dire a TS che il TIPO di data non è solo null, ma è di
  // fatto l'UNIONE di null con un oggetto con dentro una proprietà title: string

  useEffect(() => {
    console.log("all'avvio")
  }, [])

  return (
    <div>
      <h2>Componente a funzione! La prop è: {myprop}</h2>
      <h4>Il numero è {altra}</h4>
      <p>{counter}</p>
      <Button variant="info" onClick={() => setCounter(counter + 1)}>
        +
      </Button>
      <h5 onClick={() => setName(name === 'Mario' ? 'Luigi' : 'Mario')}>
        {name}
      </h5>
      <Button
        variant="success"
        onClick={() => {
          setData({ title: 'TITOLONE' })
        }}
      >
        RIEMPI OGGETTO DATA
      </Button>
      {data && <p>{data.title}</p>}
    </div>
  )
}

export default ExampleFunctionalComponent
