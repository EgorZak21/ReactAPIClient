import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'

const View = ({status, text, artist,events})=>{
  switch(status){
    case 'ArtistLoading':
      return(
        <div className="load">Loading...</div>
      );
    case '404':
      return(
        <div className="error">Band '{text}' not found.</div>
      );
    case 'EventsLoading':
    case 'Completed':
      return(
        <div className="row">
          <div className="col-md-4 col-12 artist">
            <img src={artist.image} alt=""/>
            <h2>{artist.name}</h2>
            <a href={artist.facebook}>
              <h3>Facebook</h3>
            </a>
          </div>
          <div className="col-md-8 col-12 events">
            <h2>{(artist.events_count)?'Events:':'No events found'}</h2>
            {(status ==='EventsLoading')
              ?(<div className="load">Loading...</div>)
              :(events.map((event, index)=>
                <Event {...event} key={index}/>
              ))}
          </div>
        </div>
      );
    case 'None':
    default:
      return(
        <div className="start">Enter the name of the band above.</div>
      );
  }
};

View.propTypes = {
  status: PropTypes.string.isRequired,
  text: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.shape({
    town: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired),
  artist: PropTypes.shape({
    image: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    events_count: PropTypes.number.isRequired
  })
};

export default  View;