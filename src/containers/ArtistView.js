import { connect } from 'react-redux'
import View from '../components/View'

const mapStateToProps = (state) => {
  return state;
};

const ArtistView = connect(mapStateToProps)(View);

export default ArtistView;