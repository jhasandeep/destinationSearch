// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="list-container">
      <img src={imgUrl} className="img" alt={name} />
      <p className="heading">{name}</p>
    </li>
  )
}
export default DestinationItem

// const DestinationItem = props => {
//   const {userDetails} = props
//   const {name, imgUrl} = userDetails

//   return (
//     <li>
//       <p>{name}</p>

//       <img src={imgUrl} alt={name} />
//     </li>
//   )
// }

// export default DestinationItem
