import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Dependencies from './dependencies'
const Hoc: React.FC = () => {
  const [count, setCount] = useState(0)
  console.log('kaishi ')
  const numList = useMemo(() => {
    const list = []
    for (let index = 0; index < count; index++) {
      list.push(index)
    }
    return list
  }, [count])
  console.log('12312312')
  return (
    <div>
      <Dependencies submit={count} />
      {numList.map((item) => (
        <p key={item}>{`数字为${item + 1}`}</p>
      ))}
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}

export default Hoc
