const app = (state = {status: 'None'}, action) => {
  switch(action.type){
    case 'SEARCH':
      return {status: 'ArtistLoading', text:  action.text};
    case 'ARTIST_RESPONSE':
      if(!action.name)
        return {...state, status: '404'};
      return {
        ...state,
        artist:{
          name: action.name,
          image: action.image_url,
          facebook: action.facebook_page_url,
          events_count: action.upcoming_event_count
        },
        status: 'EventsLoading'
      };
    case 'EVENTS_RESPONSE':
      if(state.status === '404')
        return {...state, status: '404'};
      return {
        ...state,
        status: 'Completed',
        events: action.events.map((event)=>{
          return{
            town: event.venue.city,
            country: event.venue.country,
            date: event.datetime.split('T')[0].replace(/-/g,'.')
          }
        })
      };
    default:
      return state;
  }
};

export default app;