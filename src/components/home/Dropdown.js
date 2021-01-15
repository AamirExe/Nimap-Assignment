import React from 'react'

const Dropdown = ({ setSelectValue }) => {

    return (<div className='custom-select'>
        <select className="Dropdown" name="dropdown" onChange={e => setSelectValue(e.target.value)}>
            <option value='null'>Select Car Brand</option>
            <option value='BMW'>BMW</option>
            <option value='Ferrari'>Ferrari</option>
            <option value='Jaguar'>Jaguar</option>
            <option value='Tesla'>Tesla</option>
            <option value='Honda'>Honda</option>
        </select>
    </div>)
}

export default Dropdown