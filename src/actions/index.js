export const  SearchRequest = (text) => {
  return {
    type: 'SEARCH',
    text: text
  }
};

export const ArtistResponse = (response) => {
  return {
    type: "ARTIST_RESPONSE",
    ...response
  }
} ;

export const EventsResponse = (events) => {
  return {
    type: "EVENTS_RESPONSE",
    events
  }
} ;