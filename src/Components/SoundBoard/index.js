import React, { Component } from 'react';
import style from './style.module.css';
import PlayButton from 'Components/PlayButton';
import ButtonLabel from 'Components/ButtonLabel';

export default class App extends Component {
  constructor (props) {
    super(props)

    const keys = Object.keys(props.sounds);
    const rows = Math.ceil(keys.length / 3) + 1;
    const height = `calc( ${100 - rows * 3}vh / ${ rows } )`
    
    this.data = {
      sounds: props.sounds,
      keys,
      height
    }

    this.state = {
      playing: null
    }
  }

  render () {
    const {
      keys,
      height,
      sounds
    } = this.data;

    return (
      <div className={style.app}>
        { 
          keys.map((key, i) => (
            <PlayButton 
              key={key}
              height={height}
              playing={i === this.state.playing}
              audio={`mp3/${key}.mp3`}
              onStop={this.play.bind(this)}
              onClick={this.play.bind(this, i)}
            >
              <ButtonLabel>{sounds[key]}</ButtonLabel>
            </PlayButton>
          ))
        }
      </div>
    );
  }

  play (i) {
    this.setState({
      playing: i
    })
  }
}