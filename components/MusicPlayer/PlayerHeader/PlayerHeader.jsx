import React from 'react';
import styles from '../MusicPlayer.module.scss';

const PlayerHeader = ({ currentAlbum, currentSong }) => {
  return (
    <div className={styles.header}>
      {/* Show song/album for currently playing track */}
      {currentSong.title ? 'Now Playing:' : 'No song selected'}{' '}
      <span>{currentSong.title}</span>
      {currentSong.audio && `(${currentAlbum.albumTitle})`}
    </div>
  );
};

export default PlayerHeader;
