// Write your code here

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  getSearchDetailsList = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="Container">
          <h1 className="heading">Destination Search</h1>
          <div>
            <input
              type="search"
              placeholder="search"
              onChange={this.getSearchDetailsList}
              className="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              className="logo"
              alt="Search icon"
            />
            <ul className="list-container">
              {searchResults.map(eachUser => (
                <DestinationItem
                  destinationDetails={eachUser}
                  key={eachUser.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch

// import DestinationItem from '../DestinationItem/index'

// const DestinationSearch = props => {
//   const {destinationsList} = props
//   //   console.log(destinationsList)

//   let searchInput = ''

//   const change = event => {
//     searchInput = event.target.value

//     filteredList = destinationsList.filter(eachUser =>
//       eachUser.name.includes(searchInput),
//     )
//   }

//   return (
//     <ul>
//       <h1>Destination Search</h1>

//       <input type="search" onChange={change} />

//       {filteredList.map(eachUser => (
//         <DestinationItem userDetails={eachUser} key={eachUser.id} />
//       ))}
//     </ul>
//   )
// }

// export default DestinationSearch
