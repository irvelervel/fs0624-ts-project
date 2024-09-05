import './App.css'
import ExampleClassComponent from './components/ExampleClassComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Errore nella prop "subtext": il componente ExampleClassComponent
        (così come TUTTI i componenti, di default) NON si aspetta di ricevere
        props! e noi stiamo passando una prop subtext di tipo string */}
        <ExampleClassComponent
          subtext="Prop passata da App.tsx"
          otherprop={100}
        />
        <ExampleClassComponent otherprop={100} />
      </header>
    </div>
  )
}

export default App
