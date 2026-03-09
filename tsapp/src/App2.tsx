import { useState } from 'react'
import './App.css'
import HelloComponent from './HelloComponent'


function App() {
  const [ age,setAge ] = useState(0);

  // initialValue는 0이지만, setAge로 값을 변경할 수 있다.

  // setAge('ten');
  return (
    <>
      <HelloComponent name="김일"  age={age}/>
    </>
  )
}
export default App  
