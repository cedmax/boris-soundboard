import React from 'react';
import Sound from 'react-sound';
import classNames from 'classnames';
import style from './style.module.css';

export default ({ height, children, audio, playing, onClick, onStop}) => [
  <a style={{height}} 
    key="button" 
    className={classNames(style.button, {[style.playing]: playing})} 
    onClick={onClick}>
    {children}
  </a>,
  <Sound
    key="sound"
    onFinishedPlaying={onStop}
    playStatus={playing ? Sound.status.PLAYING : Sound.status.STOPPED}
    url={audio}
  />
]