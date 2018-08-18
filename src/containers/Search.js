import {SearchRequest, ArtistResponse, EventsResponse} from '../actions'
import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm'

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(SearchRequest(text));
      fetch(encodeURI(`https://rest.bandsintown.com/artists/${text}?app_id=egorzak21`))
        .then(response => response.json())
        .then(data => {
          dispatch(ArtistResponse(data));
          if(data.upcoming_event_count){
            fetch(encodeURI(`https://rest.bandsintown.com/artists/${text}/events?app_id=egorzak21`))
              .then(response => response.json())
              .then(events => {
                dispatch(EventsResponse(events))
              });
          }else{
            dispatch(EventsResponse([]));
          }
        });
    }
  }
};

let Search = connect(null, mapDispatchToProps)(SearchForm);

export default Search;