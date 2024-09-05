import { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// INTERFACCIA DELLE PROPS
// normalmente, in un componente a classe, l'interfaccia di default delle
// sue props è un oggetto vuoto! {}

// dobbiamo quindi descrivere l'interfaccia dell'oggetto props per questo
// componente a classe
// noi intendiamo passare una prop che si chiama subtext, quindi:

interface ExampleClassComponentProps {
  subtext?: string
  otherprop: number
}

interface ExampleClassComponentState {
  counter: number
}

class ExampleClassComponent extends Component<
  ExampleClassComponentProps,
  ExampleClassComponentState
> {
  state = {
    counter: 0,
  }

  componentDidMount() {
    console.log('Componente montato!')
  }

  render() {
    return (
      <div>
        <h2>Esempio componente a classe!</h2>
        <p>
          {this.props.subtext} - {this.props.otherprop + 50}
        </p>
        <div>
          <Button
            variant="success"
            onClick={(e) =>
              this.setState({
                counter: this.state.counter + 2,
                // stefano: true // <-- stefano non esiste nell'interfaccia, errore!
              })
            }
          >
            +
          </Button>
          <p>{this.state.counter.toFixed(2)}</p>
          <Button
            variant="success"
            onClick={(e) =>
              this.setState({
                counter: this.state.counter - 1,
                // stefano: true // <-- stefano non esiste nell'interfaccia, errore!
              })
            }
          >
            -
          </Button>
        </div>
        <Link to="/functional">
          <h5>VAI AL COMPONENTE A FUNZIONE</h5>
        </Link>
      </div>
    )
  }
}

export default ExampleClassComponent
