import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ExampleClassComponent from './components/ExampleClassComponent'
import ExampleFunctionalComponent from './components/ExampleFunctionalComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Errore nella prop "subtext": il componente ExampleClassComponent
        (così come TUTTI i componenti, di default) NON si aspetta di ricevere
        props! e noi stiamo passando una prop subtext di tipo string */}
        {/* <ExampleClassComponent
          subtext="Prop passata da App.tsx"
          otherprop={100}
        /> */}
        {/* <ExampleClassComponent otherprop={100} /> */}
        <ExampleFunctionalComponent myprop="Stefano" altra={100} />
      </header>
    </div>
  )
}

export default App
