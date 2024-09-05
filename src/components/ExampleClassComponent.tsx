import { Component } from 'react'

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

class ExampleClassComponent extends Component<ExampleClassComponentProps> {
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
      </div>
    )
  }
}

export default ExampleClassComponent
