import React from 'react';
import style from './App.module.css';
import SoundBoard from './Components/SoundBoard';
import Title from './Components/Title';

export default props => (
  <div className={style.wrapper}>
    <Title>Boris Soundboard</Title>
    <SoundBoard {...props} />
  </div>
);
