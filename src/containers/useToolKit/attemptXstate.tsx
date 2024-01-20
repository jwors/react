import { Button } from 'antd'
import React from 'react'
import { useAppDispatch } from '~/Hook/store'
import { wxLogin } from '~/api/user'

const Xstate: React.FC = () => {
  const dispatch = useAppDispatch()

  // make dispatch

  const makeDiapatch = () => {
    dispatch(
      wxLogin({
        code: '13123',
        iv: '12313',
        phoneCode: '1231231',
        encryptedData: '12312313'
      })
    )
  }
  return (
    <div>
      <h1>12321</h1>
      <Button onClick={makeDiapatch}>按钮</Button>
    </div>
  )
}

export default Xstate
