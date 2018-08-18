import React from 'react'
import PropTypes from 'prop-types'

const Event = ({town,country,date})=>{
  return(
    <div className="event">
      <h4>{town} , {country}</h4>
      <h4>{date}</h4>
    </div>
  );
};

Event.propTypes = {
  town: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Event;