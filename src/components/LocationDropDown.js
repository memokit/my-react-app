import React, {Component} from 'react'

export default class LocationDropDown extends Component {
  render() {

    let locations = this.props.locations;
    console.log(locations);

    return (
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Dropdown link
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {
              locations.map((location, i) => 
                <a className="dropdown-item" href="#" key={location.id} data-id={location.id} data-name={location.name}>{location.name}</a>
              )
          }
        </div>
      </div>
    )
  }
}