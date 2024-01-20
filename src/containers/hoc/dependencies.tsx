import React from 'react'

// const SubComponent: React.FC = () => {
//   console.log('子组件更新了')
//   return (
//     <div>
//       <form>
//         <label>
//           name
//           <button>name</button>
//         </label>
//         <label>
//           <input type="text" />
//         </label>
//       </form>
//     </div>
//   )
// }

type Props = {
  submit: number
}

const isEqual = (preProps: Props, nextProps: Props) => {
  if (preProps.submit < 3) {
    return false
  }
  return true
}

// eslint-disable-next-line react/display-name
const SubComponent = React.memo((props: Props) => {
  const { submit } = props
  console.log(submit)
  return (
    <div>
      <p>{submit}</p>
      <input type="text" />
    </div>
  )
}, isEqual)
export default SubComponent
