import React from 'react'
import teams from '../teams.json'
import './TeamInfo.css'


class TeamInfo extends React.Component {
  render() {
    return (
      <div className="TeamInfo">
        <div className='Title' >
            <img src={this.props.crestUrl} />
            <h2>{this.props.shortName}</h2>
        </div>
        <p>Venue : {this.props.venue}</p> 
        <p>Address : {this.props.address}</p> 
        <p>Email : {this.props.email}</p>
        <p>Phone : {this.props.phone}</p>
        <p>Founded : {this.props.founded}</p>
      </div>
      
    )
  }
}

export default TeamInfo 