import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ExampleClassComponent from './components/ExampleClassComponent'
import ExampleFunctionalComponent from './components/ExampleFunctionalComponent'
import BootstrapComponent from './components/BootstrapComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchComponent from './components/FetchComponent'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            {/* Errore nella prop "subtext": il componente ExampleClassComponent
        (così come TUTTI i componenti, di default) NON si aspetta di ricevere
        props! e noi stiamo passando una prop subtext di tipo string */}

            <Route path="/" element={<FetchComponent />} />

            <Route
              path="/class"
              element={
                <ExampleClassComponent
                  subtext="Prop passata da App.tsx"
                  otherprop={100}
                />
              }
            />
            {/* <ExampleClassComponent otherprop={100} /> */}
            <Route
              path="/functional"
              element={
                <ExampleFunctionalComponent myprop="Stefano" altra={100} />
              }
            />
            <Route path="/bootstrap" element={<BootstrapComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
