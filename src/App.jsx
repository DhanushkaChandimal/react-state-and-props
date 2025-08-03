import ClassStateTest from './ClassStateTest'
import Counter from './Counter'
import PropsSender from './PropsSender'
import FunctionStateTest from './FunctionStateTest'
import MessageDisplay from "./MessageDisplay"

function App() {

  return (
    <>
      <ClassStateTest/>
      <Counter/>
      <PropsSender/>
      <FunctionStateTest/>

      <p>======================================</p>
      <MessageDisplay customMessage="Custom message passed from Parent component"/>
      <MessageDisplay customMessage="Message 2"/>
    </>
  )
}

export default App
