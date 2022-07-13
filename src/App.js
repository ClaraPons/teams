import React from "react";
import TeamInfo from "./components/TeamInfo";
import teams from "./teams.json"
import "./App.css"
import Counter from "./components/Counter";

class App extends React.Component{
  constructor () {
    super()

    this.state = {
      count: 10,
    }

}

handleClickMin = (e) => {
  // console.log(this.state.count)
  if(this.state.count > 1){ 
    this.setState({
      count: this.state.count - 1
  })
}
}

handleClickMax = (e) => {
  console.log(teams.length)
if(this.state.count !== teams.length){
    this.setState({
      count: this.state.count + 1
    })
  }
}

  render() {

    return (
      <div>
        <div className="counter">
        <Counter
          count = {this.state.count}
          increment = {this.handleClickMax}
          substract = {this.handleClickMin}
          />
        </div>
        
        <div className='container'>
        {teams.filter((team,i) => i < this.state.count).map(team => {
        return (
          <TeamInfo
          shortName = {team.shortName}
          crestUrl = {team.crestUrl}
          venue = {team.venue}
          address = {team.address}
          email = {team.email}
          phone = {team.phone}
          founded = {team.founded}
          />
        )
    })}
      </div>
      </div>
    )
  } 
}


export default App;
