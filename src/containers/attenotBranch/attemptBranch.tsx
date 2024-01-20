import React, { useState } from 'react'

const AttemptBranch: React.FC = () => {
  const [isTrue, setTrue] = useState<boolean>(false)
  const flag2 = false
  const flag3 = false
  return (
    <div>
      {
        // isTrue ?
        // 'this is true'
        // :
        // 'this is false'

        // isTrue && 'this is false'

        /*
                    bad
                     {flag && flag2 && !flag3
                        ? flag4
                        ? <p>Blah</p>
                        : flag5
                        ? <p>Meh</p>
                        : <p>Herp</p>
                        : <p>Derp</p>
                    }
                */
        // good
        (() => {
          if (isTrue && flag2) {
            if (flag3) {
              return <p>Blash</p>
            }
          } else {
            return <p>Derp</p>
          }
        })()
      }
    </div>
  )
}

export default AttemptBranch
