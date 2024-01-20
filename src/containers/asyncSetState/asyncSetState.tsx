import React, { useState } from 'react'
import './index.css'

const AsyncState: React.FC = () => {
  // const [inputValue, setInputValue] = useState<string>('')

  // const [num, setNumber] = useState<number>(1)
  // const [testNum, setTestNumber] = useState<number>(1)

  // // click methods
  // const ButtonClick = (event:React.MouseEvent) => {
  //     setNumber(num + 1)
  //     console.log(event);

  //     setTestNumber(testNum + 1)
  //     console.log(testNum );

  //     setTestNumber(testNum + 1)

  // }
  // return (
  //     <div>
  //         <input onInput={(event:React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}  type={'text'}/>
  //         <button onClick={(event:React.MouseEvent<HTMLButtonElement>) => ButtonClick(event) }>Click</button>
  //         <div className="inputValueContainer">
  //                 {
  //                     inputValue
  //                 }
  //         </div>
  //     </div>
  // )
  const [count, setCount] = useState(0)
  const handlePlus = () => {
    setCount(count + 1)
    console.log('count:', count) //<- how count
    setCount(count + 1)
  }
  return (
    <div>
      count:{count}
      <hr />
      <button onClick={handlePlus}>+1</button>
    </div>
  )
}

export default AsyncState
