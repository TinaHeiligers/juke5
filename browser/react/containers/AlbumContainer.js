import React, {Component} from 'react';
import store from '../store';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

// const mapStateToProps = function (state, ownProps)
//   return {
//     album       : ownProps.selectedAlbum,
//     currentSong : ownProps.currentSong,
//     isPlaying   : ownProps.isPlaying,
//     toggleOne   : ownProps.toggleOne
//   }
// }

// const mapDispatchToProps = function (state) {
//   return {}
// }

// const AlbumContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
//   )(Album)

class AlbumContainer extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  toggle(song, list) {
    store.dispatch(toggleSong(song, list));
  }

  render() {
    console.log("*** & Stripes", this.state)
    return <Album
      selectedAlbum={this.state.albums.selected}
      currentSong={this.state.player.currentSong}
      isPlaying={this.state.player.isPlaying}
      toggleOne={this.toggle}
    />;
  }

}

export default AlbumContainer;
