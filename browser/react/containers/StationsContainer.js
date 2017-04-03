import { connect } from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = function (songsArray) {

	// console.log(songsArray);

	const stations = {};
	songsArray.forEach(song => {
		const genre = song.genre;
		stations[genre] = stations[genre] || [];
		stations[genre].push(song);
	});
	return stations;
};

const mapStateToProps = function (state) {
	return {
		stations: convertSongsToStations(state.songs)
	};
};

const mapDispatchToProps = function (dispatch) {
	return {};
};

const StationsContainer = connect(
      mapStateToProps,
      mapDispatchToProps
      )(Stations);


export default StationsContainer;
// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		active: ownProps.filter === state.visibilityFilter
// 	}
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		onClick: () => {
// 			dispatch(setVisibilityFilter(ownProps.filter))
// 		}
// 	}
// }

// const FilterLink = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// 	)(Link)

// export default FilterLink;
