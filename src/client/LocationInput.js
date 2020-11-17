import React, { useState } from 'react';

const LocationInput = (props) => {
    const [location, setLocation] = useState(
        ''
    );

    return (
        <form action="#">
            <label>
                Location:
                <input
                    type="text"
                    value={ location }
                    onChange={event => setLocation(event.target.value)}
                />
            </label>
            <input onClick={ () => {props.onLocationSubmit(location); return false; } } type="button" value="Submit" />
        </form>
    )
};

export default LocationInput;