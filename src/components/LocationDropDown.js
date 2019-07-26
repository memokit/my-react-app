import React, { Component } from 'react'

export default class LocationDropDown extends Component {

    locationSelected(e){
        console.log(e.target);
        let locationName = e.target.getAttribute('data-name');
        console.log(locationName);
        
    }

    render() {

        let locations = this.props.locations;
        let defaultLabel = this.props.defaultLabel;

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
                    {defaultLabel}
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {
                        locations.map((location, i) =>
                            <a className="dropdown-item" href="#" onClick={e => this.locationSelected(e)} key={location.id} data-id={location.id} data-name={location.name}>{location.name}</a>
                        )
                    }
                </div>
            </div>
        )
    }
}