import React from 'react';
import Songs from '../components/Songs';

export default function Album (props) {
  console.log("props in the album", props);
  const album = props.album;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggleOne = props.toggleOne;

  return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail"/>
      </div>
      <Songs
        songs={album.songs} />

    </div>
  );

}
